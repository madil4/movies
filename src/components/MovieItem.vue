<script lang="ts">
export default {
  data() {
    return {
      id: 1,
      title: "Spider man",
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <span>{{ title }}</span>
    <button>delete</button>
    <button>edit</button>
  </div>
</template>

<style>
.wrapper {
  border: 1pt solid burlywood;
  padding: 5pt 5pt;
}

button {
  float: right;
  margin-left: 5pt;
}
</style>
