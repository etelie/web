import clsx from 'clsx';
import { useState } from 'react';

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

export type BaseTextInputProps = {
  type: TextInputType;
  className?: string;
  name?: string;
  direction?: TextInputDirection;
  placeholder?: string;
  onChange?: (text: string) => void;
};

export const BaseTextInput = ({
  direction,
  className,
  onChange,
  ...options
}: BaseTextInputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <input
      {...options}
      onChange={e => {
        e.preventDefault();
        onChange && onChange(e.target.value);
      }}
      onFocus={setFocused.bind(this, true)}
      onBlur={setFocused.bind(this, false)}
      className={clsx(
        className,
        't-w-full',
        direction === directions.rtl && 't-text-right',
        't-border-black t-border-b-2',
        't-py-[.2rem] t-px-3',
        focused && 't-bg-neutral-50',
        't-text-base',
        't-h-8',
      )}
    />
  );
};
