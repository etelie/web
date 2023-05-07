import type { Meta, StoryObj } from '@storybook/react';

import { BookmarkIcon } from './BookmarkIcon';

const meta = {
  title: 'icons/BookmarkIcon',
  component: BookmarkIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BookmarkIcon>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    size: 48,
  },
};
