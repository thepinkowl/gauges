<script lang="ts">
  export let value: Array<number> = [];

  const days = [
    { symbol: "M", id: 1 },
    { symbol: "T", id: 2 },
    { symbol: "W", id: 3 },
    { symbol: "T", id: 4 },
    { symbol: "F", id: 5 },
    { symbol: "S", id: 6 },
    { symbol: "S", id: 7 }
  ];

  const toggleDay = day => {
    const isInArray = value.includes(day.id);

    if (isInArray) {
      value = value.filter(v => v !== day.id);
    } else {
      value = [...value, day.id];
    }
  };
</script>

<style lang="scss">
  @import "styles/variables";
  @import "styles/colors";
  main {
    display: flex;
    justify-content: space-between;

    .day {
      border-radius: 50%;
      font-weight: 700;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover {
        background-color: $darkerGray;
      }

      &:active,
      &.selected {
        background-color: $darkestGray;
      }
    }
  }
</style>

<main>
  {#each days as day (day.id)}
    <div
      class="day"
      class:selected={value.includes(day.id)}
      on:click={() => toggleDay(day)}>
      {day.symbol}
    </div>
  {/each}
</main>
