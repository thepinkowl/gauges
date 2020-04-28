<script lang="ts">
  export let progress = 0;

  let green, orange, red;
  $: green = progress >= 33;
  $: orange = progress >= 10 && progress < 33;
  $: red = progress < 10;
</script>

<style lang="scss">
  @import "../styles/colors";

  .gauge {
    height: 10px;
    width: 100%;
    border-radius: 10px;
    background-color: $lightGray;
    padding: 2px;
    margin-left: -2px;

    .progress {
      height: 10px;
      border-radius: 10px;

      &.green {
        background-color: $lightGreen;
        background: linear-gradient(to right, $darkGreen 20%, $lightGreen 100%);
      }

      &.orange {
        background-color: $lightOrange;
        background: linear-gradient(to right, $darkOrange 20%, $lightOrange 100%);
      }

      &.red {
        background-color: $lightRed;
        background: linear-gradient(to right, $darkRed 20%, $lightRed 100%);
      }
    }
  }
</style>

<div class="gauge">
  <div
    class="progress"
    class:red
    class:orange
    class:green
    style="width: {progress}%;" />
</div>
