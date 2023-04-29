import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {},
} satisfies Meta<typeof Modal>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Idle: Story = {
  args: {
    hidden: false,
  },
};
