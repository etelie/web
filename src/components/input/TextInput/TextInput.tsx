import { ReloadIcon } from '@/components/icons';
import clsx from 'clsx';
import { ReactEventHandler, ReactNode } from 'react';

const Input = ({ className, type }: TextInputProps) => {
  return (
    <input
      type={type}
      className={clsx(
        className,
        't-rounded-md',
        't-border-black t-border-[0px] t-border-l-0',
        't-py-[.2rem] t-ps-3 t-pe-8',
        't-bg-slate-100',
        't-text-base',
        't-h-8'
      )}
    />
  );
};

const handleSubmit: ReactEventHandler = event => {
  alert('submitted');
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

export type TextInputProps = {
  type: TextInputType;
  className?: string;
  submittable?: boolean;
};

// todo: check 1password autofill for react indirection
//     1password extension appeared using <input type='email'/> before creating TextInput
export const TextInput = ({ className, type, submittable = false }: TextInputProps) => {
  const input = <Input className={className} type={type} />;
  return submittable ? withForm(input) : input;
};
