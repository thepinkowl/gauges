<script lang="ts">
  import { onMount } from "svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Footer from "./components/Footer.svelte";
  import { tasks, user } from "./stores";

  onMount(() => {
    user.set({
      name: "FirstName"
    });
  });
</script>

<style lang="scss">
  .container {
    width: 100%;
  }
</style>

<div class="container">

  <Dashboard />

  <Footer />

</div>
