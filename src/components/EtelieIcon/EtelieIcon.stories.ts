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

export const Base: Story = {
  args: {
    size: 48,
  },
};
