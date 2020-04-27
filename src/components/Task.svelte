<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { tap } from "@sveltejs/gestures";

  import moment from "moment";

  import Svg from "./Svg.svelte";
  import Gauge from "./Gauge.svelte";
  import WeekDisplay from "./WeekDisplay.svelte";
  import { TaskModel } from "../models/TaskModel";
  import { editIcon, doneIcon } from "./icons/index";
  import { tasks } from "../stores";

  export let task: TaskModel;

  const x = tweened(0, {
    duration: 400,
    easing: cubicOut
  });
  let mostRecentX = 0;

  x.subscribe(value => (mostRecentX = value));

  let startX;
  let startY;

  const dateToTimeAgo = date => {
    if (!date) return "never";
    return moment(date, "YYYY-MM-DD").fromNow();
  };

  const getDxDy = e => {
    return {
      dx: e.targetTouches[0].pageX - startX,
      dy: e.targetTouches[0].pageY - startY
    };
  };

  const touchStart = e => {
    if (e.targetTouches.length !== 1) return;

    startX = e.targetTouches[0].pageX - mostRecentX;
    startY = e.targetTouches[0].pageY;
  };

  const touchMove = e => {
    if (e.targetTouches.length !== 1) return;
    const { dx, dy } = getDxDy(e);

    if (Math.abs(dy) > Math.abs(dx)) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }
    x.set(dx, { duration: 0 });
  };

  const touchEnd = e => {
    if (Math.abs(mostRecentX) < 40) {
      reset();
    } else if (Math.abs(mostRecentX) < 90) {
      x.set(Math.sign(mostRecentX) * 80, { duration: 400 });
    } else {
      const goingLeft = Math.sign(mostRecentX) < 0;
      if (goingLeft) {
        activateRight();
      } else {
        activateLeft();
      }
    }
  };

  const reset = () => {
    x.set(0, { duration: 400 });
  };

  const activateRight = () => {
    x.set(-570, { duration: 400 });
    setTimeout(() => reset(), 400);
    rightAction();
  };
  const activateLeft = () => {
    x.set(570, { duration: 400 });
    setTimeout(() => reset(), 400);
    leftAction();
  };

  const leftAction = () => {
    task.last = new Date();
    tasks.update(task);
  };
  const rightAction = () => {
    console.log("edit");
  };
</script>

<style lang="scss">
  @import "styles/colors";
  $margin: 30px;

  :global(.swipe-content-action) svg {
    width: 30px;
    fill: white;
  }

  .task-container {
    display: flex;
    overflow: hidden;
    min-height: 64px;

    .task {
      position: relative;
      background-color: white;
      width: calc(100% - #{2 * $margin});
      padding: 15px 30px;
      z-index: 2;

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

    .left,
    .right {
      display: flex;
      align-items: center;
      position: absolute;
      padding: 0 15px;
      width: calc(100% - 30px);
      height: 100%;
      z-index: 1;

      &.hide {
        display: none;
      }

      .swipe-content-action {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .icon {
          width: 30px;
          margin-right: 10px;
        }
      }
    }

    .left {
      background-color: $green;
      color: white;
      justify-content: flex-start;
    }

    .right {
      background-color: $blue;
      color: white;
      justify-content: flex-end;

      .swipe-content-action {
        flex-direction: row-reverse;

        .icon {
          margin : 0 0 0 10px;
        }
      }
    }
  }
</style>

<div class="task-container">
  <div
    class="task"
    on:touchstart|preventDefault={touchStart}
    on:touchmove|preventDefault={touchMove}
    on:touchend|preventDefault={touchEnd}
    style="transform: translateX({$x}px)">
    <div class="row">
      <h3>{task.title}</h3>
      <div>
        <WeekDisplay value={task.when} />
      </div>
    </div>
    <h5>Last done {dateToTimeAgo(task.last)}</h5>
    <Gauge progress={task.progress} />
  </div>
  <div
    use:tap
    on:tap={activateLeft}
    on:click|preventDefault={activateLeft}
    class="left"
    class:hide={$x < 0}>
    <div class="swipe-content-action">
      <div class="icon">
        <Svg globalClass="white" icon={doneIcon} />
      </div>
      Done
    </div>

  </div>
  <div
    use:tap
    on:tap={activateRight}
    on:click|preventDefault={activateRight}
    class="right"
    class:hide={$x > 0}>
    <div class="swipe-content-action">
      <div class="icon">
        <Svg globalClass="white" icon={editIcon} />
      </div>
      Edit
    </div>
  </div>
</div>
