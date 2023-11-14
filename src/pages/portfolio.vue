<script>
import ProjectCard from "../components/projects/ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      projects: [],

      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
      },
    };
  },
  components: { ProjectCard },

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
  <ProjectCard :projects="projects" />
</template>

<style lang="scss" scoped></style>
