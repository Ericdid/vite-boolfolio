<script>
import axios from "axios";
import ProjectCard from "./components/projects/ProjectCard.vue";
import Navbar from "./components/ui/Navbar.vue";

export default {
  data() {
    return {
      projects: [],

      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
      },
    };
  },

  components: { Navbar },

  // methods: {
  //   fetchprojects(url = this.api.baseUrl + "projects") {
  //     axios.get(url).then((response) => {
  //       this.projects = response.data.projects;
  //     });
  //   },
  // },

  // created() {
  //   this.fetchprojects();
  // },
};
</script>

<template>
  <Navbar />
  <hr />
  <router-view></router-view>
  <!-- <ProjectCard :projects="projects" /> -->
</template>

<style lang="scss"></style>
