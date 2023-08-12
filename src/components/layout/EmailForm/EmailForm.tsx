import clsx from 'clsx'

import { SubHeadingText } from '@/components/typography';
import { TextInput } from '@/components/input/TextInput';
import { types } from '@/components/input/TextInput/TextInput';

import l from './language';

export type EmailFormProps = {};

export const EmailForm = ({}: EmailFormProps) => {
  // todo: get locale from Redux store
  return (
    <div
      className={clsx(
        't-flex',
        't-flex-col t-items-left t-justify-between',
        `lg:t-flex-row lg:t-items-center`,
      )}
    >
      <SubHeadingText className={clsx('t-w-80', 't-mb-2', 'md:t-w-128', `lg:t-me-4 lg:t-mb-0`)}>
        {l.en.email_request}
      </SubHeadingText>
      <div className={clsx(`t-flex t-flex-row lg:t-justify-end`, 't-w-80')}>
        <TextInput type={types.email} placeholder={l.en.email_address} submittable className={clsx('t-w-11/12')} />
      </div>
    </div>
  );
};
