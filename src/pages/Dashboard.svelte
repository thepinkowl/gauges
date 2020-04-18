<script lang="ts">
  import Task from "../components/Task.svelte";
  import { tasks, user } from "../stores";

  const addNewTask = () => {
    alert("add new task");
  };
</script>

<style lang="scss">
  main {
    padding: 6vw 6vw 0;

    .name {
      color: rgb(0, 100, 200);
    }

    .task {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        height: 1px;
        width: calc(100% + 6vw);
        background-color: #e0e0e0;
      }
    }

    .add-new-task {
      display: flex;
      justify-content: center;
      padding: 10px 0;
    }
  }
</style>

<main>
  <h2>
    Hello
    <span class="name">{$user.name}</span>
    !
  </h2>
  {#each $tasks as task (task.id)}
    <div class="task">
      <Task {task} />
    </div>
  {/each}

  <div class="add-new-task" on:click={addNewTask}>
    <a href="#">Add new task</a>
  </div>
</main>
