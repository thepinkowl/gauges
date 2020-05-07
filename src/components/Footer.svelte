<script lang="ts">
  import pkg from "../../package.json";
  // TODO: Add ThePinkOwl logo
</script>

<style lang="scss">
  .footer {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    color: pink;
    font-size: 10px;

    a {
      color: pink;
    }
  }
</style>

<div class="footer">
  Gauges by <a target="_blank" href="https://github.com/thepinkowl">ThePinkOwl</a> - <a target="_blank" href={pkg.license.url}>{pkg.license.type}</a>
</div>
