import type { Meta, StoryObj } from "@storybook/react";
import HomeFooter from "./HomeFooter";

const meta: Meta<typeof HomeFooter> = {
  title: "Home/HomeFooter",
  component: HomeFooter,
};

export default meta;
type Story = StoryObj<typeof HomeFooter>;

export const Default: Story = {
  render: () => <HomeFooter />,
};
