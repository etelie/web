import type { Meta, StoryObj } from '@storybook/react';

import { EtelieIcon } from './EtelieIcon';

const meta = {
  title: 'EtelieIcon',
  component: EtelieIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EtelieIcon>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Idle: Story = {
  args: {
    width: 48,
    height: 48,
  },
};
