import { describe, it, expect, vi, afterEach } from "vitest";

import { mount } from "@vue/test-utils";
import AddMovieInput from "../AddMovieInput.vue";
import { addMovie } from "@/firebase";

vi.mock("@/firebase", () => {
  return {
    addMovie: vi.fn(),
  };
});

describe("AddMovieInput", () => {
  const wrapper = mount(AddMovieInput);
  const input = wrapper.find("input");

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should default with an empty value", () => {
    expect(input.element.value).toBe("");
  });

  it("should have a placeholder", () => {
    expect(input.element.placeholder).toBe("Add new movie");
  });

  it("should not add a movie when the value is empty", async () => {
    input.setValue("");

    await input.trigger("keyup.enter");

    expect(addMovie).not.toBeCalled();
  });

  it("should add a movie when the enter key is up", async () => {
    const movie = "Spiderman";

    input.setValue(movie);
    await input.trigger("keyup.enter");

    expect(addMovie).toHaveBeenCalledWith(movie);
  });

  it("should reset input value after adding a movie", async () => {
    const movie = "Spiderman";

    input.setValue(movie);
    await input.trigger("keyup.enter");

    expect(addMovie).toBeCalledWith(movie);
    expect(input.element.value).toBe("");
  });
});
