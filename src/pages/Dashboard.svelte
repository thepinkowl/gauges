<script lang="ts">
  import { replace } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import Task from "../components/Task.svelte";
  import Footer from "../components/Footer.svelte";
  import { tasks, user } from "../stores";

  export const params = {};

  const addNewTask = () => {
    replace(`/tasks/new`);
  };

  const goToTask = task => {
    // replace(`/tasks/${task.id}`);
  };
</script>

<style lang="scss">
  @import "../styles/colors";

  $margin: 30px;

  main {
    padding: $margin 0 0;

    .greeting,
    .task {
      padding: 0 $margin;
    }

    .greeting {
      margin: 0;
      padding-bottom: 20px;
      font-weight: bold;

      .name {
        color: $blue;
      }
    }

    .task {
      position: relative;
      padding: 0;
      margin-top: 1px;

      &.active {
        background-color: #f7f7f7;

        &:after {
          height: 0;
        }
      }

      &:after {
        content: "";
        position: absolute;
        height: 1px;
        width: calc(100% - #{$margin});
        background-color: $gray;
        left: $margin;
      }
    }

    .add-new-task {
      display: flex;
      justify-content: center;
      padding: 10px 0;
      color: $blue;
    }
  }
</style>

<main>
  <h2 class="greeting">
    Hey <span class="name">{$user.name}</span>,
    you're doing well today!
  </h2>
  {#each $tasks as task (task.id)}
    <div
      class="task active"
      use:active={`/tasks/${task.id}`}
      on:click={() => goToTask(task)}>
      <Task {task} />
    </div>
  {/each}

  <div class="add-new-task" on:click={addNewTask}>
    Create a new repeating task
  </div>

  <Footer />
</main>
