import type { Meta, StoryObj } from '@storybook/react';

import { CheckCircleIcon } from './CheckCircleIcon';

const meta = {
  title: 'icons/CheckCircleIcon',
  component: CheckCircleIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CheckCircleIcon>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Outlined: Story = {
  args: {
    size: 10,
    solid: false,
  },
};

export const Solid: Story = {
  args: {
    size: 20,
    solid: true,
  },
};
