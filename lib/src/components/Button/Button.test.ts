import { VueWrapper, mount } from "@vue/test-utils";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import Button, { ButtonProps } from "./Button.vue";

describe("Button", () => {
  let button: VueWrapper<ButtonProps>;

  beforeAll(() => {
    button = mount(Button, {
      props: {
        value: "Click me",
      },
    });
  });

  afterAll(() => {
    button.unmount();
  });

  it("should render the button", () => {
    expect(button).toBeDefined();
  });

  it("should render the button", () => {
    expect(button.text()).toContain("Click me");
  });
});
