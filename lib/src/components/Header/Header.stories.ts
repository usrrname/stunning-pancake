import type { Meta, StoryObj } from "@storybook/vue3";

import Header from "./Header.vue";

const meta = {
  title: "Example/Header",
  component: Header,
  render: (args: any) => ({
    components: { Header },
    setup() {
      return { args };
    },
    template: '<Header :user="args.user" />',
  }),
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: Story = {
  args: {
    user: null,
  },
};
