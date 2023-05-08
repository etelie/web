import type { Meta, StoryObj } from '@storybook/react';

import { CloseIcon } from './CloseIcon';
import { IconBlackBackground } from '@/stories/decorators';

const meta = {
  title: 'icons/CloseIcon',
  component: CloseIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CloseIcon>;
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
    inverted: true,
  },
  decorators: [IconBlackBackground],
};
