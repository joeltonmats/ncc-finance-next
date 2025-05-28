import type { Meta, StoryObj } from "@storybook/react";
import DashboardHeader from "./DashboardHeader";

const meta: Meta<typeof DashboardHeader> = {
  title: "Dashboard/DashboardHeader",
  component: DashboardHeader,
};

export default meta;
type Story = StoryObj<typeof DashboardHeader>;

export const Default: Story = {};
