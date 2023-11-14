<script>
import ProjectCard from "../components/projects/ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
      },
    };
  },

  components: {
    ProjectCard,
  },

  created(url = this.api.baseUrl) {
    console.log(url + "projects/" + this.$route.params.id);
    axios.get(url + "projects/" + this.$route.params.id);
  },
};
</script>

<template>
  <div class="container">
    <h1 class="my-3">Dettaglio Progetto</h1>
    <p>{{ this.$route.params.id }}</p>
    <!-- <ProjectCard /> -->
  </div>
</template>

<style lang="scss" scoped></style>
