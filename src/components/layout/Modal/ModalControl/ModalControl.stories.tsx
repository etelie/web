import { BookmarkIcon, ReloadIcon } from '@/components/icons';
import type { Meta, StoryObj } from '@storybook/react';

import { ModalControl } from './ModalControl';

const meta = {
  title: 'layout/ModalControl',
  component: ModalControl,
  parameters: {},
} satisfies Meta<typeof ModalControl>;
type Story = StoryObj<typeof meta>;

export default meta;

export const One: Story = {
  args: {
    controls: [
      <button onClick={() => globalThis.location.reload()}>
        <ReloadIcon size={23} inverted />
      </button>,
    ],
  },
};

export const Two: Story = {
  args: {
    controls: [
      <button onClick={() => globalThis.location.reload()}>
        <ReloadIcon size={23} inverted />
      </button>,
      <BookmarkIcon size={19} inverted />,
    ],
  },
};
