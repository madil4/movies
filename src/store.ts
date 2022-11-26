import { reactive } from "vue";

export const store = reactive({
  movies: [
    { id: 1, title: "Spiderman" },
    { id: 2, title: "Batman" },
  ],
  delete(id: number) {
    this.movies = this.movies.filter((movie) => movie.id !== id);
  },
});
