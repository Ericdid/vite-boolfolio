<script>
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";
import { RouterView } from "vue-router";

export default {
  data() {
    return {
      projects: [],

      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
      },
    };
  },

  components: { ProjectCard, RouterView },

  methods: {
    fetchprojects(url = this.api.baseUrl + "projects") {
      axios.get(url).then((response) => {
        this.projects = response.data.projects;
      });
    },
  },

  created() {
    this.fetchprojects();
  },
};
</script>
<template>
  <h1>Lista Progetti</h1>
  <hr />
  <RouterView></RouterView>
  <!-- <ProjectCard :projects="projects" /> -->
</template>
<style lang="scss"></style>
