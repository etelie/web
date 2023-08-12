import { ReloadIcon } from '@/components/icons';
import { CheckCircleIcon } from '@/components/icons/CheckCircleIcon';
import clsx from 'clsx';
import { FormEvent, FormEventHandler, ReactNode, useState } from 'react';

const BaseTextInput = ({ direction, ...options }: TextInputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <input
      {...options}
      onFocus={setFocused.bind(this, true)}
      onBlur={setFocused.bind(this, false)}
      className={clsx(
        't-w-full',
        direction === directions.rtl && 't-text-right',
        't-border-black t-border-b-2',
        't-py-[.2rem] t-ps-3 t-pe-8',
        focused && 't-bg-neutral-50',
        't-text-base',
        't-h-8',
      )}
    />
  );
};

const handleSubmit: FormEventHandler = (event: FormEvent) => {
  event.preventDefault();
  const email: string = event.type;
  alert(`submitted ${email}`);
};

// todo: submit indicator transitions from unfilled green circle (with or without check mark) to filled green circle
//     stretch: rotation loading animation

const SubmittableTextInput = ({ ...options }: TextInputProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <BaseTextInput {...options} />
      <div
        onClick={handleSubmit}
        className={clsx('t-absolute t-top-[6px] t-end-2', 't-cursor-pointer')}
      >
        <CheckCircleIcon solid={false} className={clsx('t-w-[18px] t-h-[18px]')} />
      </div>
    </form>
  );
};

export const types = {
  text: 'text',
  email: 'email',
} as const;
export type TextInputType = (typeof types)[keyof typeof types];

export const directions = {
  ltr: 'ltr',
  rtl: 'rtl',
} as const;
export type TextInputDirection = (typeof directions)[keyof typeof directions];

export type TextInputProps = {
  type: TextInputType;
  className?: string;
  submittable?: boolean;
  direction?: TextInputDirection;
  placeholder?: string;
};

// todo: check 1password autofill for react indirection
//     1password extension appeared using <input type='email'/> before creating TextInput
export const TextInput = ({
  className,
  submittable = false,
  direction = directions.ltr,
  ...options
}: TextInputProps) => {
  return (
    <div className={clsx(className, 't-relative')}>
      {submittable ? <SubmittableTextInput {...options} /> : <BaseTextInput {...options} />}
    </div>
  );
};
