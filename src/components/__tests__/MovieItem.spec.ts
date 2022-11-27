import { describe, it, expect, vi, afterEach } from "vitest";

import { mount } from "@vue/test-utils";
import MovieItem from "../MovieItem.vue";
import { editMovie, deleteMovie } from "@/firebase";

vi.mock("@/firebase", () => {
  return {
    deleteMovie: vi.fn(),
    editMovie: vi.fn(),
  };
});

describe("MovieItem", async () => {
  const movie = { id: 123, title: "Spiderman" };
  const wrapper = mount(MovieItem, {
    props: { movie },
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should show the move title", () => {
    expect(wrapper.find("td span").text()).toBe("Spiderman");
  });

  it("should show edit and delete buttons", () => {
    expect(wrapper.findAll("button")[0].text()).toBe("Edit");
    expect(wrapper.findAll("button")[1].text()).toBe("Delete");
  });

  it("should show an edit input when the edit button is clicked", async () => {
    const editButton = wrapper.findAll("button")[0];

    await editButton.trigger("click");

    expect(wrapper.find("input").element.value).toBe(movie.title);
  });

  it("should edit the movie when the enter key is up", async () => {
    const editButton = wrapper.findAll("button")[0];

    await editButton.trigger("click");
    const input = wrapper.find("input");
    await input.trigger("keyup.enter");

    expect(editMovie).toBeCalledWith(movie.id, movie.title);
  });

  it("should not edit the movie when the input value is empty", async () => {
    const editButton = wrapper.findAll("button")[0];

    await editButton.trigger("click");
    const input = wrapper.find("input");
    input.setValue("");
    await input.trigger("keyup.enter");

    expect(editMovie).not.toBeCalled();
  });

  it("should reset the input value after adding a movie", async () => {
    const editButton = wrapper.findAll("button")[0];

    await editButton.trigger("click");
    const input = wrapper.find("input");
    await input.trigger("keyup.enter");

    expect(input.element.value).toBe("");
  });

  it("should delete the movie when the delete button is clicked", async () => {
    const deleteButton = wrapper.findAll("button")[1];

    await deleteButton.trigger("click");

    expect(deleteMovie).toBeCalledWith(movie.id);
  });
});
