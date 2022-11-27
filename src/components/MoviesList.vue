<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th style="width: 70%" scope="col">Title</th>
          <th style="width: 30%" scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <MovieItem v-for="movie in store.movies" :movie="movie" :key="movie.id">
        </MovieItem>
      </tbody>
    </table>
  </div>
</template>

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
