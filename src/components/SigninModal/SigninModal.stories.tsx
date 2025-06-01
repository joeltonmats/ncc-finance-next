import { useState } from "react";
import SigninModal from "./index";
import type { Meta, StoryObj } from "@storybook/react";

function SigninModalStoryWrapper() {
  const [isOpen] = useState(true);

  return (
    <SigninModal
      isOpen={isOpen}
      onClose={() => {
        console.log("Modal closed");
      }}
    />
  );
}

const meta: Meta<typeof SigninModal> = {
  title: "Modals/SigninModal",
  component: SigninModal,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof SigninModal>;

export const Default: Story = {
  render: () => <SigninModalStoryWrapper />,
};
