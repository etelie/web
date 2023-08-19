import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

const meta = {
  title: 'typography/Label',
  component: Label,
  parameters: {},
} satisfies Meta<typeof Label>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    children: 'Label',
  },
};
