import clsx from 'clsx';
import l from './language';

import { SubHeadingText } from '@/components/typography';
import { TextInput } from '@/components/input/TextInput';
import { types } from '@/components/input/TextInput/TextInput';

export type EmailFormProps = {};

export const EmailForm = ({}: EmailFormProps) => {
  // todo: get locale from Redux store
  return (
    <div>
      <SubHeadingText>{l.en.email_request}</SubHeadingText>
      <div className={clsx('t-flex t-flex-row t-justify-start')}>
        <TextInput type={types.email} submittable className={clsx()} />
      </div>
    </div>
  );
};
