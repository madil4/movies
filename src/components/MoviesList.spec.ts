import { describe, it, expect, vi, type Mock } from "vitest";

import { mount } from "@vue/test-utils";
import MoviesList from "./MoviesList.vue";
import { loadMovies } from "@/firebase";

vi.mock("@/firebase", () => {
  return {
    loadMovies: vi.fn(),
    deleteMovie: vi.fn(),
  };
});

describe("MoviesList", () => {
  it("should load movies", async () => {
    (loadMovies as Mock).mockReturnValueOnce([
      { title: "Spiderman" },
      { title: "Batman" },
    ]);
    const wrapper = mount(MoviesList);

    expect(wrapper.findAll("td span")[0].text()).toBe("Spiderman");
    expect(wrapper.findAll("td span")[1].text()).toBe("Batman");
  });
});
