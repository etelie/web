import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';

import { HeroIcon } from './HeroIcon';

const meta = {
  title: 'icons/HeroIcon',
  component: HeroIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HeroIcon>;
type Story = StoryObj<typeof meta>;

export default meta;

export const CheckCircleOutlined: Story = {
  args: { icon: 'CheckCircleIcon' },
  render: () => <HeroIcon icon='CheckCircleIcon' className={clsx('t-w-12 t-h-12')} />,
};

export const CheckCircleSolid: Story = {
  args: { icon: 'CheckCircleIcon' },
  render: () => <HeroIcon icon='CheckCircleIcon' solid className={clsx('t-w-12 t-h-12')} />,
};

export const EllipsisHorizontalCircleOutlined: Story = {
  args: { icon: 'EllipsisHorizontalCircleIcon' },
  render: () => <HeroIcon icon='EllipsisHorizontalCircleIcon' className={clsx('t-w-12 t-h-12')} />,
};

export const EllipsisHorizontalCircleSolid: Story = {
  args: { icon: 'EllipsisHorizontalCircleIcon' },
  render: () => (
    <HeroIcon icon='EllipsisHorizontalCircleIcon' solid className={clsx('t-w-12 t-h-12')} />
  ),
};

export const ExclamationCircleOutlined: Story = {
  args: { icon: 'CheckCircleIcon' },
  render: () => <HeroIcon icon='ExclamationCircleIcon' className={clsx('t-w-12 t-h-12')} />,
};

export const ExclamationCircleSolid: Story = {
  args: { icon: 'ExclamationCircleIcon' },
  render: () => <HeroIcon icon='ExclamationCircleIcon' solid className={clsx('t-w-12 t-h-12')} />,
};
