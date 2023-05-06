import type { Meta, StoryObj } from '@storybook/react';

import { SubHeadingText } from './SubHeadingText';

const meta = {
  title: 'SubHeadingText',
  component: SubHeadingText,
  parameters: {},
} satisfies Meta<typeof SubHeadingText>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    children: 'SubHeadingText',
  },
};
