<script lang="ts">
  const licenses = [
    {
      title: "new note",
      author: "Pawel Rak from the Noun Project",
      link: "https://thenounproject.com/term/new-note/1656740/",
      license: {
        type: "CC",
        link: "https://creativecommons.org/licenses/by/3.0/us/legalcode"
      }
    },
    {
      title: "done",
      author: "Pawel Rak from the Noun Project",
      link: "https://thenounproject.com/term/done/1654609/",
      license: {
        type: "CC",
        link: "https://creativecommons.org/licenses/by/3.0/us/legalcode"
      }
    }
  ];
</script>

<style lang="scss">
  @import "../styles/colors";

  $margin: 30px;

  main {
    padding: $margin $margin 0 $margin;

    h2 {
      padding: 0 0 20px;
      margin: 0;
    }

    .licenses {
      .license {
        padding-bottom: 20px;
      }
    }
  }
</style>

<main>
  <h2>Licenses</h2>
  <div class="licenses">
    {#each licenses as license}
      <div class="license">
        <a href={license.link}>{license.title}</a>
        by {license.author}
        <br />
        <small>
          {license.license.type}
          <a href={license.license.link}>Learn more</a>
        </small>
      </div>
    {/each}
  </div>
</main>
