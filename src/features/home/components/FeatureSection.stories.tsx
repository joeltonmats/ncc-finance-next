import type { Meta, StoryObj } from "@storybook/react";
import FeaturesSection from "./FeatureSection";

const meta: Meta<typeof FeaturesSection> = {
  title: "Home/FeaturesSection",
  component: FeaturesSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof FeaturesSection>;

export const Default: Story = {
  render: () => <FeaturesSection />,
};
