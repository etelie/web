import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta = {
  title: 'Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Icon>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Idle: Story = {
  args: {
    width: 16,
    height: 16,
  },
};
