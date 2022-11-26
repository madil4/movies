<script lang="ts">
import MovieItem from "./MovieItem.vue";

export default {
  components: { MovieItem },
  data() {
    return {
      movies: [
        { id: 1, title: "Spiderman" },
        { id: 2, title: "Batman" },
      ],
    };
  },
};
</script>

<template>
  <ol>
    <MovieItem v-for="item in movies" :movie="item" :key="item.id"> </MovieItem>
  </ol>
</template>
