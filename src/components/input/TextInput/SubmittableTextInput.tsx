import { HeroIcon, HeroIconProps } from '~/components/icons/HeroIcon';
import { useId, useState } from 'react';
import clsx from 'clsx';

import { BaseTextInput } from '~/components/input/TextInput/BaseTextInput';
import { BaseTextInputProps } from '~/components/input/TextInput/BaseTextInput';

const handleSubmit = async (
  text: string,
  isValid: Required<SubmittableTextInputProps>['isValid'],
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
  setSuccessful: React.Dispatch<React.SetStateAction<boolean>>,
  onSubmit: Required<SubmittableTextInputProps>['onSubmit'],
) => {
  if (!isValid(text) || text === '') {
    return;
  }

  setLoading(true);
  setSuccessful(await onSubmit(text));
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

const getIcon = (
  valid: boolean,
  loading: boolean,
  submitted: boolean,
  successful: boolean,
): {
  type: HeroIconProps['icon'];
  color: string;
  solid: boolean;
} => {
  if (submitted) {
    return {
      type: successful ? 'CheckCircleIcon' : 'XCircleIcon',
      color: successful ? 't-text-green-500' : 't-text-red-500',
      solid: true,
    };
  } else {
    return {
      type: loading
        ? 'EllipsisHorizontalCircleIcon'
        : valid
        ? 'PlusCircleIcon'
        : 'ExclamationCircleIcon',
      color: 't-text-black',
      solid: false,
    };
  }
};

export type SubmittableTextInputProps = BaseTextInputProps & {
  onSubmit?: (text: string) => Promise<boolean>;
};

export const SubmittableTextInput = ({
  name,
  className,
  isValid = _ => true,
  onSubmit = async _ => true,
  onChange,
  ...options
}: SubmittableTextInputProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(true);
  const [successful, setSuccessful] = useState(false);
  const id = useId();

  const { type: icon, color, solid } = getIcon(valid, loading, submitted, successful);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const text = data.get(name ?? id) as string;
        handleSubmit(text, isValid, setLoading, setSubmitted, setSuccessful, onSubmit);
      }}
    >
      <BaseTextInput
        {...options}
        name={name ?? id}
        isValid={isValid}
        onChange={text => handleChange(text, isValid, setValid, setSubmitted, onChange)}
        className={clsx(className, 't-pe-8')} // Normally would require !, but pe is more specific than the internal px
      />
      <div
        onClick={event => {
          event.preventDefault();
          const div = event.currentTarget as HTMLDivElement;
          const input = div.previousSibling as HTMLInputElement;
          const text = input.value;
          handleSubmit(text, isValid, setLoading, setSubmitted, setSuccessful, onSubmit);
        }}
        className={clsx('t-absolute t-top-[4px] t-end-2', 't-cursor-pointer', color)}
      >
        <HeroIcon icon={icon} solid={solid} className={clsx('t-w-[22px] t-h-[22px]')} />
      </div>
    </form>
  );
};
