import type { Meta, StoryObj } from '@storybook/react';

import { HeadingText } from './HeadingText';

const meta = {
  title: 'typography/HeadingText',
  component: HeadingText,
  parameters: {},
} satisfies Meta<typeof HeadingText>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    children: 'HeadingText',
  },
};
