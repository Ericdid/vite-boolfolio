<script>
import ProjectCard from "../components/ProjectCard.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },
  components: { ProjectCard },
};
</script>

<template>
  <h1><ProjectCard /></h1>
</template>

<style lang="scss" scoped></style>
