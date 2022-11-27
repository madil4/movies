<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th style="width: 60%" scope="col">Title</th>
          <th style="width: 40%" scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <MovieItem v-for="movie in movies" :movie="movie" :key="movie.id">
        </MovieItem>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import MovieItem from "./MovieItem.vue";
import { loadMovies } from "@/firebase";

export default {
  components: { MovieItem },
  setup() {
    return { movies: loadMovies() };
  },
};
</script>
