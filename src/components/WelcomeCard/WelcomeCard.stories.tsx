import type { Meta, StoryObj } from "@storybook/react";
import WelcomeCard from "./WelcomeCard";

const meta: Meta<typeof WelcomeCard> = {
  title: "Dashboard/WelcomeCard",
  component: WelcomeCard,
};

export default meta;

type Story = StoryObj<typeof WelcomeCard>;

export const Default: Story = {
  args: {
    name: "João",
    date: new Date("2025-05-19"),
    accountLabel: "Conta Corrente",
    balance: 12345.67,
  },
};
