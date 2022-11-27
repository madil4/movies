<template>
  <div class="container h-100 d-flex align-items-center justify-content-center">
    <div style="width: 500px">
      <MoviesList />
      <AddMovieInput />
    </div>
  </div>
</template>

<script setup lang="ts">
import MoviesList from "./components/MoviesList.vue";
import AddMovieInput from "./components/AddMovieInput.vue";
</script>
