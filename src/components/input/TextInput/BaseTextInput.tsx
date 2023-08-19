import clsx from 'clsx';
import { useState } from 'react';

export const types = {
  text: 'text',
  email: 'email',
  password: 'password',
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
  isValid?: (text: string) => boolean;
  onChange?: (text: string) => void;
};

const handleChange = (
  text: string,
  isValid: Required<BaseTextInputProps>['isValid'],
  setValid: React.Dispatch<React.SetStateAction<boolean>>,
  onChange: Required<BaseTextInputProps>['onChange'],
) => {
  setValid(isValid(text));
  onChange(text);
};

export const BaseTextInput = ({
  direction,
  className,
  onChange = _ => {},
  isValid = _ => true,
  ...options
}: BaseTextInputProps) => {
  const [focused, setFocused] = useState(false);
  const [valid, setValid] = useState(true);

  const color = valid ? 't-bg-neutral-50' : 't-bg-red-100';

  return (
    <input
      {...options}
      onChange={e => {
        e.preventDefault();
        handleChange(e.target.value, isValid, setValid, onChange);
      }}
      onFocus={setFocused.bind(this, true)}
      onBlur={setFocused.bind(this, false)}
      className={clsx(
        className,
        't-w-full',
        direction === directions.rtl && 't-text-right',
        `t-border-black t-border-b-2`,
        't-py-[.2rem] t-px-3',
        (focused || !valid) && color,
        't-text-base',
        't-h-8',
      )}
    />
  );
};
