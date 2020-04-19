<script lang="ts">
  import { replace } from "svelte-spa-router";
  import { fly } from "svelte/transition";
  import { tasks } from "../stores";
  import { TaskModel } from "../models/TaskModel";
  import WeekSelector from "../components/WeekSelector.svelte";

  const dateToString = date => {
    return date.toISOString().split("T")[0];
  };

  let task = {
    title: "",
    when: [],
    last: dateToString(new Date())
  };

  const saveTask = () => {
    if (!TaskModel.isValid(task)) {
      return alert("All fields are required");
    }

    tasks.add(new TaskModel(task));
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
    }

    input[type="date"] {
      display: block;
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      min-height: 2em;
    }

    button {
      background-color: $blue;
      color: white;
      padding: 15px 40px;
      border-radius: 5px;
      width: calc(100% - 60px);
      margin: 0 30px;
    }
  }
</style>

<main in:fly={{ duration: 300, x: 280 }} out:fly={{ duration: 300, x: 280 }}>

  <label>Let's give it a name!</label>
  <input bind:value={task.title} />

  <label>When do you usually do this task?</label>
  <div class="week">
    <WeekSelector bind:value={task.when} />
  </div>

  <label>When did you last do this?</label>
  <input type="date" bind:value={task.last} />

  <button on:click|preventDefault={saveTask}>Create</button>

</main>
