<script>
export default {
  data() {
    return {};
  },

  props: {
    projects: Array,
  },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-5 g-3">
      <div class="col" v-for="project in projects">
        <div class="card h-100">
          <h2>{{ project.title }}</h2>
          <p>{{ project.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
