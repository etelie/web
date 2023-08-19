import type { Meta, StoryObj } from '@storybook/react';
import { EmailForm } from '../EmailForm';

import { MockStore } from '@/stories/decorators';

import { Modal } from './Modal';
import { ModalControlOptions } from './ModalControl';

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
    logoHidden: false,
  },
};

export const Reload: Story = {
  args: {
    ...Base.args,
    control: ModalControlOptions.RELOAD,
  },
};

export const Close: Story = {
  args: {
    ...Base.args,
    control: ModalControlOptions.CLOSE,
  },
};

export const ReloadAndClose: Story = {
  args: {
    ...Base.args,
    control: ModalControlOptions.RELOAD_AND_CLOSE,
  },
};

export const NoIcon: Story = {
  args: {
    ...Base.args,
    logoHidden: true,
  },
};

export const WithEmailForm: Story = {
  decorators: [MockStore],
  args: {
    ...Base.args,
    children: <EmailForm />,
  },
};
