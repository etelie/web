import type { Meta, StoryObj } from '@storybook/react';

import { BookmarkIcon } from './BookmarkIcon';
import { IconBlackBackgroundWithMargin } from '~/stories/decorators';

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

export const Inverted: Story = {
  args: {
    ...Base.args,
    size: 30,
    inverted: true,
  },
  decorators: [IconBlackBackgroundWithMargin(16)],
};
