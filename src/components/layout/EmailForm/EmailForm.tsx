import clsx from 'clsx';
import l from './language';

import { SubHeadingText } from '@/components/typography';

export type EmailFormProps = {};

export const EmailForm = ({}: EmailFormProps) => {
  // todo: get locale from Redux store
  return (
    <div>
      <SubHeadingText>{l.en.email_request}</SubHeadingText>
      <div className={clsx('t-flex t-flex-row t-justify-start')}>
        <input type='email' className={clsx()}/>
        <input type='submit' className={clsx()}/>
      </div>
    </div>
  );
};
