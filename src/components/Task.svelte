<script lang="ts">
  import moment from "moment";
  import Gauge from "./Gauge.svelte";
  import WeekDisplay from "./WeekDisplay.svelte";
  import { TaskModel } from "../models/TaskModel";

  export let task: TaskModel;

  const dateToTimeAgo = date => {
    if (!date) return "never";

    return moment(date, "YYYY-MM-DD").fromNow();
  };
</script>

<style lang="scss">
  $margin: 30px;
  .task {
    position: relative;
    width: calc(100% - #{2 * $margin});
    padding: 15px 30px;

    .row {
      display: flex;
      justify-content: space-between;
    }

    h3 {
      margin: 0;
      padding: 0;
    }

    h5 {
      margin: 0;
      padding: 0 0 10px;
      color: #999999;
      font-weight: normal;
    }
  }
</style>

<div class="task">
  <div class="row">
    <h3>{task.title}</h3>
    <div>
      <WeekDisplay value={task.when} />
    </div>
  </div>
  <h5>Last done {dateToTimeAgo(task.last)}</h5>
  <Gauge progress={task.progress} />
</div>
