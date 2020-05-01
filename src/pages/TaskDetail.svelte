<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { replace } from "svelte-spa-router";
  import { fly } from "svelte/transition";

  import { router, tasks, toaster } from "../stores";
  import { TaskModel, dateToString } from "../models/TaskModel";
  import WeekSelector from "../components/WeekSelector.svelte";

  export let params: { id: string };

  let task: TaskModel = new TaskModel();

  let last;
  let subscribe;
  let create = false;
  $: create = params.id === "new";

  onMount(() => {
    if (params.id === "new") {
      router.title.set("New task");
      router.canGoBack.set(true);
      last = dateToString(task.mostRecentExecution);
    } else {
      router.title.set("Edit task");
      subscribe = tasks.subscribe(_tasks => {
        task = _tasks.find(t => t.id === parseInt(params.id));
        if (!(task instanceof TaskModel)) {
          return replace("/");
        }
        last = dateToString(task.mostRecentExecution);
      });
    }
  });

  onDestroy(() => {
    if (subscribe instanceof Function) {
      subscribe();
    }
  });

  const saveTask = () => {
    if (!TaskModel.isValid(task) || !last) {
      return toaster.add({
        title: "All fields are required",
        duration: 3000,
      });
    }

    if (dateToString(task.mostRecentExecution) !== last) {
      const date = new Date(last);
      const [mostRecent, ...rest] = task.executions;
      mostRecent.setFullYear(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );
    }

    tasks.save(task);
    replace("/");
  };

  const removeTask = () => {
    toaster.add({
      title: `${task.title} has been removed`,
      action: {
        title: "Undo",
        callback: () => {
          console.log("adding back task");
        }
      }
    });

    tasks.deleteById(task.id);

    replace("/");
  };
</script>

<style lang="scss">
  @import "../styles/colors";

  $margin: 30px;

  main {
    padding: $margin;

    .title {
      // margin: 0;
      padding-bottom: $margin;
    }

    label {
      font-weight: bold;
      padding-bottom: 10px;

      & + * {
        margin-bottom: $margin;
      }
    }

    input {
      width: calc(100% - #{0 * $margin});

      &[type="date"] {
        display: block;
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        min-height: 2em;
        background-color: white;
      }
    }

    button {
      background-color: $blue;
      color: white;
      padding: 15px 40px;
      border-radius: 5px;
      width: calc(100% - 60px);
      margin: 0 30px;
    }

    .remove {
      color: $darkRed;
      font-weight: bold;
      display: flex;
      justify-content: center;
      padding-top: 30px;
    }
  }
</style>

{#if task}
  <main in:fly={{ duration: 300, x: 280 }} out:fly={{ duration: 300, x: 280 }}>

    <label>Let's give it a name!</label>
    <input bind:value={task.title} />

    <label>When do you usually do this task?</label>
    <div class="week">
      <WeekSelector bind:value={task.when} />
    </div>

    <label>When did you last do this?</label>
    <input type="date" bind:value={last} />
    <button on:click|preventDefault={saveTask}>
      {create ? 'Create' : 'Update'}
    </button>

    {#if !create}
      <div class="remove" on:click|preventDefault={removeTask}>
        Remove this task
      </div>
    {/if}
  </main>
{/if}
