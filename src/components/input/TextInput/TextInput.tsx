import clsx from 'clsx';

import { BaseTextInput, directions } from '@/components/input/TextInput/BaseTextInput';
import {
  SubmittableTextInput,
  SubmittableTextInputProps,
} from '@/components/input/TextInput/SubmittableTextInput';

export type TextInputProps = SubmittableTextInputProps & {
  submittable?: boolean;
};

export const TextInput = ({
  className,
  submittable = false,
  direction = directions.ltr,
  ...options
}: TextInputProps) => {
  return (
    <div className={clsx(className, 't-relative')}>
      {submittable ? (
        <SubmittableTextInput {...options} direction={direction} />
      ) : (
        <BaseTextInput {...options} direction={direction} />
      )}
    </div>
  );
};
