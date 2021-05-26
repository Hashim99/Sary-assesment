import { shallowMount } from "@vue/test-utils";
import Rating from "./Rating.vue";

describe("Rating.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Rating, {
      methods: { saveRating: () => {} },
    });
  });
});

it("renders", () => {
  excpect(wrapper.exists()).toBe(true);
});
