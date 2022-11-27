<template>
  <div class="mt-4">
    <input v-model="text" @keyup.enter="add" placeholder="Add new movie" />
  </div>
</template>

<script lang="ts">
import { addMovie } from "@/firebase";
import { ref } from "vue";

export default {
  setup() {
    const text = ref("");

    const add = () => {
      if (text.value) {
        addMovie(text.value);
        text.value = "";
      }
    };

    return { text, add };
  },
};
</script>
