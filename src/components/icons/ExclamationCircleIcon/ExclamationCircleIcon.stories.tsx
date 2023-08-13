import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';

import { ExclamationCircleIcon } from './ExclamationCircleIcon';

const meta = {
  title: 'icons/ExclamationCircleIcon',
  component: ExclamationCircleIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ExclamationCircleIcon>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Outlined: Story = {
  render: () => <ExclamationCircleIcon className={clsx('t-w-12 t-h-12')} />,
};

export const Solid: Story = {
  render: () => <ExclamationCircleIcon solid className={clsx('t-w-12 t-h-12')} />,
};
