<template>
  <tr>
    <td>
      <input v-if="editMode" v-model="editText" @keyup.enter="edit" />
      <span v-else>{{ movie.title }}</span>
    </td>
    <td>
      <button class="btn btn-primary btn-sm me-2" @click="editMode = true">
        Edit
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
    const editMode = ref(false);
    const editText = ref(props.movie.title);

    const edit = () => {
      if (editText.value) {
        editMovie(props.movie.id, editText.value);
        editMode.value = false;
      }
    };

    return { editMode, editText, edit, deleteMovie };
  },
};
</script>
