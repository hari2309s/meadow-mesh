import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@meadow-mesh/components";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "accent"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A customizable button component with hover and tap animations using Framer Motion.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Primary button with a hover scale (1.05) and tap scale (0.95) animation.",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Secondary button with a hover scale (1.05) and tap scale (0.95) animation.",
      },
    },
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    children: "Accent Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Accent button with a hover scale (1.05) and tap scale (0.95) animation.",
      },
    },
  },
};
