import { ReloadIcon } from '@/components/icons';
import clsx from 'clsx';
import { ReactNode } from 'react';

const Input = ({ className, type }: TextInputProps) => {
  return (
    <input
      type={type}
      className={clsx(
        className,
        't-rounded-md',
        't-border-black t-border-[0px] t-border-l-0',
        't-px-1.5 t-py-[.2rem]',
        't-bg-slate-200',
      )}
    />
  );
};

const withForm = (node: ReactNode) => {
  return (
    <form>
      {node}
      <div>
        <input type='submit' />
        <ReloadIcon size={18} />
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
