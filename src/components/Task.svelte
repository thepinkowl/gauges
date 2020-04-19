<script lang="ts">
  import Gauge from "./Gauge.svelte";

  type TaskModel = {
    title: string;
    progress: number;
  };

  export let task: TaskModel;
  export let title: string = "";
  export let progress: number = 0;
</script>

<style lang="scss">
  .task {
    position: relative;
    width: 100%;
    padding: 20px 0;

    h3 {
      margin: 0;
      padding: 0;
    }

    h5 {
      margin: 0;
      padding: 0 0 10px;
      color: #999999;
    }
  }
</style>

<div class="task">
  <h3>{task.title}</h3>
  <h5>Last done: never</h5>
  <Gauge progress={task.progress} />
</div>
