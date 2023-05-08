import type { Meta, StoryObj } from '@storybook/react';

import { ReloadIcon } from './ReloadIcon';
import { IconBlackBackground } from '@/stories/decorators';

const meta = {
  title: 'icons/ReloadIcon',
  component: ReloadIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ReloadIcon>;
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
