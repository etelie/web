import type { Meta, StoryObj } from '@storybook/react';

import { TextInput, types } from './TextInput';

const meta = {
  title: 'layout/TextInput',
  component: TextInput,
  parameters: {},
} satisfies Meta<typeof TextInput>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Text: Story = {
  args: {
    type: types.text,
  },
};

export const Email: Story = {
  args: {
    type: types.email,
  },
};

export const Submittable: Story = {
  args: {
    type: types.text,
    submittable: true,
  },
};
