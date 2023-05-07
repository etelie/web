import { ReloadIcon } from '@/components/icons';
import type { Meta, StoryObj } from '@storybook/react';

import { ModalControl } from './ModalControl';

const meta = {
  title: 'layout/ModalControl',
  component: ModalControl,
  parameters: {},
} satisfies Meta<typeof ModalControl>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    children: <ReloadIcon size={23} inverted />,
  },
};
