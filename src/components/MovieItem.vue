<template>
  <tr>
    <td>
      <input
        v-if="editModeID == movie.id"
        v-model="editText"
        @keyup.enter="edit"
      />
      <span v-else>{{ movie.title }}</span>
    </td>
    <td>
      <button
        class="btn btn-primary btn-sm me-2"
        @click="editModeID = movie.id"
      >
        edit
      </button>
      <button class="btn btn-danger btn-sm" @click="deleteMovie(movie.id)">
        Delete
      </button>
    </td>
  </tr>
</template>

<script lang="ts">
import { deleteMovie, editMovie } from "@/firebase";
import { ref } from "vue";
export default {
  props: ["movie"],
  setup(props) {
    const editModeID = ref("");
    const editText = ref(props.movie.title);

    const edit = () => {
      if (editText.value) {
        editMovie(props.movie.id, editText.value);
        editModeID.value = "";
      }
    };

    return { editModeID, editText, edit, deleteMovie };
  },
};
</script>
