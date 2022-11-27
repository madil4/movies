<template>
  <div>
    <input v-model="text" @keyup.enter="edit" />
  </div>
</template>

<script lang="ts">
import { store } from "../store";
export default {
  props: ["movie"],
  data() {
    return {
      text: this.movie.title,
      store,
    };
  },
  methods: {
    edit() {
      if (this.text) {
        store.edit(this.movie.id, this.text);
        store.editModeID = -1;
      }
    },
  },
};
</script>
