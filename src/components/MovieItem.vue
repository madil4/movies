<script lang="ts">
import { store } from "../store";
import EditMovieInput from "./EditMovieInput.vue";
export default {
  components: { EditMovieInput },
  props: ["movie"],
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <EditMovieInput v-if="store.editModeID == movie.id" :movie="movie" />
    <span v-else>{{ movie.title }}</span>
    <button @click="store.delete(movie.id)">delete</button>
    <button @click="store.editModeID = movie.id">edit</button>
  </div>
</template>
