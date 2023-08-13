import { HeroIcon, HeroIconProps } from '@/components/icons/HeroIcon';
import { useId, useState } from 'react';
import clsx from 'clsx';

import { BaseTextInput } from '@/components/input/TextInput/BaseTextInput';
import { BaseTextInputProps } from '@/components/input/TextInput/BaseTextInput';

const handleSubmit = async (
  text: string,
  isValid: (text: string) => boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
  onSubmit?: (text: string) => Promise<void>,
) => {
  if (!isValid(text) || text === '') {
    return;
  }

  setLoading(true);
  onSubmit && (await onSubmit(text));
  setSubmitted(true);
  setLoading(false);
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

export type SubmittableTextInputProps = BaseTextInputProps & {
  isValid?: (text: string) => boolean;
  onSubmit?: (text: string) => Promise<void>;
};

export const SubmittableTextInput = ({
  name,
  className,
  isValid = _ => true,
  onSubmit,
  onChange,
  ...options
}: SubmittableTextInputProps) => {
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
        {...options}
        name={name ?? id}
        onChange={text => handleChange(text, isValid, setValid, setSubmitted, onChange)}
        className={clsx(className, 't-pe-8')} // Normally would require !, but pe is more specific than px
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
