<script lang="ts">
import { store } from "../store";
export default {
  props: {
    movie: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <span>{{ movie?.title }}</span>
    <button @click="store.delete(movie?.id)">delete</button>
    <button>edit</button>
  </div>
</template>

<style>
.wrapper {
  border: 1pt solid burlywood;
  padding: 5pt;
  margin: 5pt;
}

button {
  float: right;
  margin-left: 5pt;
}
</style>
