<script lang="ts">
  import { onMount } from "svelte";
  import { replace } from "svelte-spa-router";
  import Router from "svelte-spa-router";

  import { tasks, toaster, user } from "./stores";
  import { masterRoutes, detailRoutes } from "./routes";
  import Toast from "./components/Toast.svelte";
  import NavigationBar from "./components/NavigationBar.svelte";

  let showSecondaryRouter = false;

  tasks.subscribe(array => array.length === 0 && replace("/welcome"));

  const routeLoaded = e =>
    (showSecondaryRouter = e.detail.name !== "Empty" && e.detail.name !== "*");

  let _toasts = [];
  toaster.subscribe(value => (_toasts = [...value]));
  let toast;
  $: toast = _toasts.shift();
</script>

<style lang="scss">
  @import "styles/variables";
  @import "styles/colors";

  main {
    display: flex;
    flex-direction: row;
    height: 100vh;
    user-select: none;

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
      $navbarHeight: 51px;

      .master {
        flex: 1;
      }

      .detail,
      .navbar {
        &.hide {
          visibility: hidden;
          opacity: 0;
        }
      }

      .detail {
        flex: 0;
        position: absolute;
        height: calc(100% - #{$navbarHeight});
        background-color: white;
        padding-top: $navbarHeight;
        width: 100%;
        visibility: visible;
        opacity: 1;
        transition: visibility 0.25s, opacity 0.25s linear;
        z-index: 10;
        border: 0;
      }
    }
  }
</style>

<main>
  <div class="navbar" class:hide={!showSecondaryRouter}>
    <NavigationBar />
  </div>
  <div class="master">
    <Router routes={masterRoutes} />
  </div>
  <div class="detail" class:hide={!showSecondaryRouter}>
    <Router routes={detailRoutes} on:routeLoaded={routeLoaded} />
  </div>
  {#if toast}
    <Toast {toast} />
  {/if}
</main>
