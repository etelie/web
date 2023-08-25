import clsx from 'clsx';

import { TextInput, types as text_input_types } from '~/components/input/TextInput';
import { Label } from '~/components/typography/Label';

export type AuthItemProps = {
  label: string;
  className?: string;
  sensitive?: boolean;
};

export const AuthItem = ({ label, className, sensitive = false }: AuthItemProps) => {
  // todo: lower label, zindex + 1, higher on focus, animated transition to/from, integrate with TextInput
  return (
    <div className={clsx(className, 't-flex t-flex-col t-justify-between t-items-start')}>
      <Label >{label}</Label>
      <TextInput
        type={sensitive ? text_input_types.password : text_input_types.text}
        name={label}
        className={clsx('t-w-full')}
      />
    </div>
  );
};
