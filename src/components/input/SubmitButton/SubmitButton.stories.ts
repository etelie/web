import type { Meta, StoryObj } from '@storybook/react';

import { SubmitButton } from './SubmitButton';

const meta = {
  title: 'input/SubmitButton',
  component: SubmitButton,
  parameters: {},
} satisfies Meta<typeof SubmitButton>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {},
};
