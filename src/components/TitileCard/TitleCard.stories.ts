import type { Meta, StoryObj } from "@storybook/react";

import { TitleCard } from "./TitleCard";

const meta = {
  title: "TitleCard",
  component: TitleCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TitleCard>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {};
