import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';

import { EllipsisCircleIcon } from './EllipsisCircleIcon';

const meta = {
  title: 'icons/EllipsisCircleIcon',
  component: EllipsisCircleIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EllipsisCircleIcon>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Outlined: Story = {
  render: () => <EllipsisCircleIcon className={clsx('t-w-12 t-h-12')} />,
};

export const Solid: Story = {
  render: () => <EllipsisCircleIcon solid className={clsx('t-w-12 t-h-12')} />,
};
