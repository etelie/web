import clsx from 'clsx';
import l from './language';

import { SubHeadingText } from '@/components/typography';
import { TextInput } from '@/components/input/TextInput';
import { types } from '@/components/input/TextInput/TextInput';

export type EmailFormProps = {};

export const EmailForm = ({}: EmailFormProps) => {
  // todo: get locale from Redux store
  return (
    <div className={clsx('t-flex t-flex-row t-justify-between t-items-center')}>
      <SubHeadingText className={clsx('t-me-4')}>{l.en.email_request}</SubHeadingText>
      <div className={clsx('t-flex t-flex-row t-justify-start', 't-w-80')}>
        <TextInput type={types.email} submittable className={clsx('t-w-full')} />
      </div>
    </div>
  );
};
