<script lang="ts">
  import { onMount } from "svelte";
  import { replace } from "svelte-spa-router";
  import Router from "svelte-spa-router";
  import Dashboard from "./pages/Dashboard.svelte";
  import Welcome from "./pages/Welcome.svelte";
  import NewTask from "./pages/NewTask.svelte";
  import TaskDetail from "./pages/TaskDetail.svelte";
  import Empty from "./components/Empty.svelte";
  import NavigationBar from "./components/NavigationBar.svelte";
  import { tasks, user } from "./stores";

  const masterRoutes = {
    "/welcome": Welcome,
    "/tasks": Dashboard,
    "/tasks/*": Dashboard,
    // Catch-all
    // This is optional, but if present it must be the last
    "*": Dashboard
  };

  const detailRoutes = {
    "/tasks/new": NewTask,
    "/tasks/:id": TaskDetail,
    "*": Empty
  };

  let showSecondaryRouter = false;

  tasks.subscribe(array => array.length === 0 && replace("/welcome"));

  const routeLoaded = e => (showSecondaryRouter = e.detail.name !== "Empty");
</script>

<style lang="scss">
  @import "styles/variables";
  @import "styles/colors";

  main {
    display: flex;
    flex-direction: row;
    height: 100vh;

    .master {
      flex: 3;
      min-width: $small;
    }

    .detail {
      flex: 6;
      border-left: 1px solid $gray;
    }

    .master,
    .detail {
      overflow: scroll;
    }
  }

  @media (max-width: $middle) {
    main {
      .master {
        flex: 1;
      }

      .detail {
        flex: 0;
        position: absolute;
        height: 100%;
        background-color: white;
        width: 100%;
        visibility: visible;
        opacity: 1;
        transition: visibility 0.25s, opacity 0.25s linear;

        &.hide {
          visibility: hidden;
          opacity: 0;
        }
      }
    }
  }
</style>

<main>
  <div class="master">
    <Router routes={masterRoutes} />
  </div>
  <div class="detail" class:hide={!showSecondaryRouter}>
    <NavigationBar />
    <Router routes={detailRoutes} on:routeLoaded={routeLoaded} />
  </div>
</main>
