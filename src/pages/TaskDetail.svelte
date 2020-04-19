<script lang="ts">
  import { fly } from "svelte/transition";

  export let params = {};
</script>

<style lang="scss">

</style>

<div in:fly={{ duration: 300, x: 280 }} out:fly={{ duration: 300, x: 280 }}>
  <h1>Task {params.id}</h1>

</div>
