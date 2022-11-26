import { reactive } from "vue";

export interface Movie {
  id: number;
  title: string;
}

export const store = reactive({
  count: 1,
  movies: [
    { id: 0, title: "Superman" },
    { id: 1, title: "Batman" },
  ],
  delete(id: number) {
    this.movies = this.movies.filter((movie: Movie) => movie.id !== id);
  },
  add(title: string) {
    this.count++;
    this.movies.push({ id: this.count, title });
  },
});
