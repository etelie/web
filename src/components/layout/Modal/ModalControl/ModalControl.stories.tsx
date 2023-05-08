import { BookmarkIcon, ReloadIcon } from '@/components/icons';
import type { Meta, StoryObj } from '@storybook/react';

import { ModalControl, ModalControlOptions } from './ModalControl';

const meta = {
  title: 'layout/ModalControl',
  component: ModalControl,
  parameters: {},
} satisfies Meta<typeof ModalControl>;
type Story = StoryObj<typeof meta>;

export default meta;

export const One: Story = {
  args: {
    control: ModalControlOptions.RELOAD,
  },
};
