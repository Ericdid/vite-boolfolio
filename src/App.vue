<script>
import axios from "axios";

export default {
  data() {
    return {};
  },

  created() {
    // console.log(axios);
    axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
      console.log(response);
    });
  },
};
</script>
<template>
  <h1>Hello World</h1>
</template>
<style lang="scss"></style>
