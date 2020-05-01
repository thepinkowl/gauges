<script lang="ts">
  import { replace } from "svelte-spa-router";
  import Footer from "../components/Footer.svelte";

  export const params = {};

  const addNewTask = () => {
    replace(`/tasks/new`);
  };
</script>

<style lang="scss">
  @import "../styles/colors";

  main {
    position: relative;
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;

    .container {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .success {
        width: 70%;
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
  <div class="container">
    <img class="success" src="10355-loading-success.gif" alt="Success" />
    <h4>You're all set up!</h4>
    <div class="add-new-task" on:click={addNewTask}>
      Let's create your first repeating task!
    </div>
  </div>

  <Footer />
</main>
