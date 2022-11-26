<script lang="ts">
import { store } from "../store";
export default {
  data() {
    return {
      text: "",
      store,
    };
  },
  methods: {
    add() {
      if (this.text) store.add(this.text);
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <input v-model="text" @keyup.enter="add" placeholder="add a movie title" />
    <button @click="add">add</button>
  </div>
</template>
