import clsx from 'clsx';
import { useId, useState } from 'react';

import { HeroIcon, HeroIconProps } from '@/components/icons/HeroIcon';

// todo: separate into other file
const BaseTextInput = ({ direction, onChange, ...options }: TextInputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <input
      {...options}
      onSubmit={undefined}
      onChange={e => {
        e.preventDefault();
        onChange && onChange(e.target.value);
      }}
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

const handleSubmit = (
  text: string,
  isValid: (text: string) => boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
  onSubmit?: (text: string) => void,
) => {
  if (!isValid(text)) {
    return;
  }

  setLoading(true);

  console.log(text);

  onSubmit && onSubmit(text);

  setSubmitted(true);
  setLoading(false);
  // todo: transition check circle to solid
};

const handleChange = (
  text: string,
  isValid: (text: string) => boolean,
  setValid: React.Dispatch<React.SetStateAction<boolean>>,
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
  onChange?: (text: string) => void,
) => {
  setValid(isValid(text));
  setSubmitted(false);
  onChange && onChange(text);
};

// todo: submit indicator transitions from unfilled green circle (with or without check mark) to filled green circle
//     stretch: yellow color or alternate icon for invalid input
//         problem: don't want to show a check mark
//     stretch: rotation loading animation

// todo: separate into other file
const SubmittableTextInput = ({
  name,
  isValid = _ => true,
  onSubmit,
  onChange,
  ...options
}: TextInputProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(true);
  const id = useId();

  const check_color = submitted ? 't-text-green-500' : 't-text-black';
  const icon: HeroIconProps['icon'] = submitted
    ? 'CheckCircleIcon'
    : loading
    ? 'EllipsisHorizontalCircleIcon'
    : valid
    ? 'PlusCircleIcon'
    : 'ExclamationCircleIcon';
  const solid: boolean = submitted;

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const text = data.get(name ?? id) as string;
        handleSubmit(text, isValid, setLoading, setSubmitted, onSubmit);
      }}
    >
      <BaseTextInput
        name={name ?? id}
        onChange={text => handleChange(text, isValid, setValid, setSubmitted, onChange)}
        {...options}
      />
      <div
        onClick={event => {
          event.preventDefault();
          const div = event.currentTarget as HTMLDivElement;
          const input = div.previousSibling as HTMLInputElement;
          const text = input.value;
          handleSubmit(text, isValid, setLoading, setSubmitted, onSubmit);
        }}
        className={clsx('t-absolute t-top-[4px] t-end-2', 't-cursor-pointer', check_color)}
      >
        <HeroIcon icon={icon} solid={solid} className={clsx('t-w-[22px] t-h-[22px]')} />
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
  name?: string;
  className?: string;
  submittable?: boolean;
  direction?: TextInputDirection;
  placeholder?: string;
  isValid?: (text: string) => boolean;
  onChange?: (text: string) => void;
  onSubmit?: (text: string) => void;
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
      {submittable ? (
        <SubmittableTextInput direction={direction} {...options} />
      ) : (
        <BaseTextInput direction={direction} {...options} />
      )}
    </div>
  );
};
