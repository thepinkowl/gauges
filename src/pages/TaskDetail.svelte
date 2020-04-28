<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  import { router } from "../stores";

  export let params = {};

  onMount(() => {
    router.title.set("Edit task");
  });
</script>

<style lang="scss">

</style>

<div in:fly={{ duration: 300, x: 280 }} out:fly={{ duration: 300, x: 280 }}>
  <h1>Task {params.id}</h1>

</div>
