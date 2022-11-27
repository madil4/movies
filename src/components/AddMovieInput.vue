<template>
  <div class="mt-4">
    <input v-model="text" @keyup.enter="add" placeholder="Add new movie" />
  </div>
</template>

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
      if (this.text) {
        store.add(this.text);
        this.text = "";
      }
    },
  },
};
</script>
