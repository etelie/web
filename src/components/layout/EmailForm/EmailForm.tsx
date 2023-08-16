import clsx from 'clsx';
import z from 'zod';

import { SubHeadingText } from '@/components/typography';
import { TextInput, types } from '@/components/input/TextInput';

import { useAppSelector } from '@/store';

import lexicon from './lexicon';
import { usePostNewsletterSubscriptionMutation } from '@/common/newsletter';

const isEmailValid = (text: string) => {
  const schema = z.string().email();
  return schema.safeParse(text).success || text === '';
};

export type EmailFormProps = {};

export const EmailForm = ({}: EmailFormProps) => {
  const [postSubscription, subscriptionResult] = usePostNewsletterSubscriptionMutation();

  const { language } = useAppSelector(state => state.locale);
  const str = lexicon[language];

  return (
    <div
      className={clsx(
        't-flex',
        't-flex-col t-items-left t-justify-between',
        `lg:t-flex-row lg:t-items-center`,
      )}
    >
      <SubHeadingText className={clsx('t-w-80', 't-mb-2', 'md:t-w-128', `lg:t-me-4 lg:t-mb-0`)}>
        {str.emailRequest}
      </SubHeadingText>
      <div className={clsx(`t-flex t-flex-row lg:t-justify-end`, 't-w-80')}>
        <TextInput
          name='email_list'
          type={types.email}
          placeholder={str.emailAddress}
          submittable
          isValid={isEmailValid}
          className={clsx('t-w-11/12')}
          onSubmit={async text => {
            const result = await postSubscription(text);
          }}
        />
      </div>
    </div>
  );
};
