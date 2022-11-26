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
