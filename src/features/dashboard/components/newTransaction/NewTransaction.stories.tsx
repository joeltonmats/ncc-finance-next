import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import NewTransaction from "./newTransaction";

const meta: Meta<typeof NewTransaction> = {
  title: "Dashboard/NewTransaction",
  component: NewTransaction,
};

export default meta;

type Story = StoryObj<typeof NewTransaction>;

const TransactionWrapper = () => {
  const [balance, setBalance] = useState(5000);
  return <NewTransaction balance={balance} setBalance={setBalance} />;
};

export const Default: Story = {
  render: () => <TransactionWrapper />,
};
