import { useState } from "react";
import SignupModal from "./index";
import type { Meta, StoryObj } from "@storybook/react";

function SignupModalStoryWrapper() {
  const [isOpen] = useState(true);

  return (
    <SignupModal
      isOpen={isOpen}
      onClose={() => {
        console.log("Modal closed");
      }}
    />
  );
}

const meta: Meta<typeof SignupModal> = {
  title: "Modals/SignupModal",
  component: SignupModal,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof SignupModal>;

export const Default: Story = {
  render: () => <SignupModalStoryWrapper />,
};
