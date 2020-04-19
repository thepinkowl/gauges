<script lang="ts">
  import { replace } from "svelte-spa-router";

  export const params = {};

  const goBack = e => {
    replace("/");
  };
</script>

<style lang="scss">
  @import "styles/variables";
  @import "styles/colors";

  $padding: 10px;

  .navigation-bar {
    display: none;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: white;
    border-bottom: 1px solid $gray;
    padding: 15px $padding;

    .back {
      color: $blue;
    }

    .title {
      position: absolute;
      width: calc(100% - #{2 * $padding});
      display: flex;
      justify-content: center;
      z-index: -1;
    }
  }

  @media (max-width: $middle) {
    .navigation-bar {
      display: flex;
    }
  }
</style>

<div class="navigation-bar">
  <span class="back" on:click={goBack}>&lt; Back</span>
  <strong class="title">Title</strong>

</div>
