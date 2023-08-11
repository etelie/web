import { ReloadIcon } from '@/components/icons';
import clsx from 'clsx';
import { FormEvent, FormEventHandler, ReactEventHandler, ReactNode } from 'react';

const Input = ({ className, direction = directions.ltr, ...options }: TextInputProps) => {
  return (
    <input
      {...options}
      className={clsx(
        className,
        direction === directions.rtl && 't-text-right',
        't-rounded-md',
        't-border-black t-border-[0px] t-border-l-0',
        't-py-[.2rem] t-ps-3 t-pe-8',
        't-bg-slate-100',
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

const withForm = (node: ReactNode) => {
  return (
    <form onSubmit={handleSubmit} className={clsx('t-w-full', 't-relative')}>
      {node}
      <div
        onClick={handleSubmit}
        className={clsx('t-absolute t-top-[7px] t-end-2', 't-cursor-pointer')}
      >
        <ReloadIcon size={18} inverted className={clsx('t-bg-white', 't-rounded-[10px]')} />
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
};

// todo: check 1password autofill for react indirection
//     1password extension appeared using <input type='email'/> before creating TextInput
export const TextInput = ({ submittable = false, ...options }: TextInputProps) => {
  const input = <Input {...options} />;
  return submittable ? withForm(input) : input;
};
