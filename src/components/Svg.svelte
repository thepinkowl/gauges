<script lang="ts">
  import { onMount } from "svelte";

  export let icon = "";
  export let globalClass = "";

  let svgIcon = "";

  onMount(() => {
    const currentClass = /class=".*"/.exec(icon);

    globalClass = "svelte-svg " + globalClass;

    if (!currentClass) {
      svgIcon = icon.replace("<svg", `<svg class="${globalClass}"`);
    } else {
      svgIcon = icon.replace('class="', `class="${globalClass} `);
    }
  });
</script>

<style lang="scss">

  :global(svg.svelte-svg) {
    &.white {
      fill: white;
    }

    &.black {
      fill: black;
    }
  }
</style>

{@html svgIcon}
