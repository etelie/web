import type { Meta, StoryObj } from '@storybook/react';
import z from 'zod';
import { directions, types } from './BaseTextInput';

import { sleep } from '@/common/concurrency';
import { TextInput } from './TextInput';

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

export const RTL: Story = {
  args: {
    type: types.text,
    direction: directions.rtl,
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
    onSubmit: async _ => {
      await sleep(2000);
    },
  },
};

export const SubmittableEmail: Story = {
  args: {
    type: types.email,
    submittable: true,
    isValid: text => {
      const schema = z.string().email();
      return schema.safeParse(text).success || text === '';
    },
    onSubmit: async _ => {
      await sleep(2000);
    },
  },
};
