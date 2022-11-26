<script lang="ts">
export default {
  props: {
    movie: Object,
  },
};
</script>

<template>
  <div class="wrapper">
    <span>{{ movie?.title }}</span>
    <button>delete</button>
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
