<script lang="ts">
  import { WeekDays } from "../models/DayModel";

  export let value: Array<number> = [];

  const days = WeekDays;
</script>

<style lang="scss">
  @import "styles/variables";
  @import "styles/colors";
  main {
    display: flex;
    justify-content: space-between;

    .day {
      border-radius: 50%;
      font-weight: 400;
      margin-right: 1px;
      width: 12px;
      height: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $darkestGray;
      font-size: 0.65em;

      &.selected {
        background-color: $darkerGray;
      }
    }
  }
</style>

<main>
  {#each days as day (day.id)}
    <div class="day" class:selected={value.includes(day.id)}>{day.symbol}</div>
  {/each}
</main>
