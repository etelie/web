import clsx from 'clsx';
import l from './language';

import { SubHeadingText } from '@/components/typography';
import { TextInput } from '@/components/input/TextInput';
import { types } from '@/components/input/TextInput/TextInput';

export type EmailFormProps = {};

export const EmailForm = ({}: EmailFormProps) => {
  // todo: get locale from Redux store
  const v = 'lg'; // Tailwind breakpoint for vertical -> horizontal flex

  return (
    <div
      className={clsx(
        't-flex',
        't-flex-col t-items-left t-justify-between',
        `${v}:t-flex-row ${v}:t-items-center`,
      )}
    >
      <SubHeadingText className={clsx('t-w-80', 't-mb-2', 'md:t-w-128', `${v}:t-me-4 ${v}:t-mb-0`)}>
        {l.en.email_request}
      </SubHeadingText>
      <div className={clsx(`t-flex t-flex-row ${v}:t-justify-end`, 't-w-80')}>
        <TextInput type={types.email} placeholder={l.en.email_address} submittable className={clsx('t-w-11/12')} />
      </div>
    </div>
  );
};
