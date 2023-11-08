<script>
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";

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
  <h1>Hello World</h1>
  <hr />
  <ProjectCard />
</template>
<style lang="scss"></style>
