<script lang="ts">
import MovieItem from "./MovieItem.vue";
import { store } from "../store";

export default {
  components: { MovieItem },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <MovieItem v-for="movie in store.movies" :movie="movie" :key="movie.id">
  </MovieItem>
</template>
