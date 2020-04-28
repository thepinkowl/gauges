<script lang="ts">
  import { onMount } from "svelte";
  import { tap } from "@sveltejs/gestures";

  import { ToastModel } from "../models/ToastModel";
  import { toaster } from "../stores";

  export let toast: ToastModel;

  $: if (!toast.shown) {
    toast.shown = new Date();
    toaster.pop(toast.duration);
  }

  function action() {
    console.log("action");
  }
</script>

<style lang="scss">
  @import "styles/colors";
  main {
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
    background-color: white;
    bottom: 0;
    width: calc(100% - 30px);
    border-top: 1px solid $gray;
    z-index: 15;

    .title {
      font-weight: bold;
    }

    .action {
      color: $blue;
    }
  }
</style>

<main>
  <div class="title">{toast.title}</div>

  {#if toast.action}
    <div class="action" use:tap on:tap={toast.action.callback}>
      {toast.action.title}
    </div>
  {/if}
</main>
