import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';

import { CheckCircleIcon } from './CheckCircleIcon';

const meta = {
  title: 'icons/CheckCircleIcon',
  component: CheckCircleIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CheckCircleIcon>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Outlined: Story = {
  render: () => <CheckCircleIcon className={clsx('t-w-12 t-h-12')} />,
};

export const Solid: Story = {
  render: () => <CheckCircleIcon solid className={clsx('t-w-12 t-h-12')} />,
};
