import type { Meta, StoryObj } from '@storybook/react';

import { EmailForm } from './EmailForm';

const meta = {
  title: 'layout/EmailForm',
  component: EmailForm,
  parameters: {},
} satisfies Meta<typeof EmailForm>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
  args: {},
};
