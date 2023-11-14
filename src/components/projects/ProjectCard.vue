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
          <a href="" class="align-self-end mt-auto me-2 mb-2 btn btn-primary"
            >Dettagli</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
