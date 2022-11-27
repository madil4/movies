<template>
  <tr>
    <td>
      <EditMovieInput v-if="store.editModeID == movie.id" :movie="movie" />
      <span v-else>{{ movie.title }}</span>
    </td>
    <td>
      <button
        class="btn btn-primary btn-sm me-2"
        @click="store.editModeID = movie.id"
      >
        edit
      </button>
      <button class="btn btn-danger btn-sm" @click="store.delete(movie.id)">
        Delete
      </button>
    </td>
  </tr>
</template>

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
