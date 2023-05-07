import { BookmarkIcon, ReloadIcon } from '@/components/icons';
import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta = {
  title: 'layout/Modal',
  component: Modal,
  parameters: {},
} satisfies Meta<typeof Modal>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {
    hidden: false,
    title: 'etelie.com is under development',
    footerLeft: 'Please check back in later',
    footerRight: 'Last attempt: March 31, 2023 – 17:07 CDT',
    iconHidden: false,
  },
};

export const WithControls: Story = {
  args: {
    ...Base.args,
    controls: [
      <button onClick={() => globalThis.location.reload()}>
        <ReloadIcon size={23} inverted />
      </button>,
      <BookmarkIcon size={19} inverted />,
    ],
  },
};

export const NoIcon: Story = {
  args: {
    ...Base.args,
    iconHidden: true,
  },
};
