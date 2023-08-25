import clsx from 'clsx';
import { HeroIcon } from '~/components/icons/HeroIcon';

import { SubmitButton } from '~/components/input/SubmitButton';
import { TextInput, types as text_input_types } from '~/components/input/TextInput';
import { Modal, sizes as modal_sizes } from '~/components/layout/Modal';

import { AuthItem } from './AuthItem';

export type AuthPageProps = {};

export const AuthPage = ({}: AuthPageProps) => {
  const labels = {
    username: 'User name',
    password: 'Password',
  };

  return (
    <Modal title={'Identity verification'} size={modal_sizes.sm}>
      <form
        onSubmit={e => {
          e.preventDefault();
          const data = new FormData(e.currentTarget); // todo: create utility function for building and parsing FormData
          const username = data.get(labels.username);
          const password = data.get(labels.password);
          console.log(`username: ${username}\npassword: ${password}`);
        }}
      >
        <div
          className={clsx(
            't-flex t-flex-col t-justify-between t-items-start',
            't-mt-2',
            't-w-full',
          )}
        >
          <AuthItem label={labels.username} className={clsx('t-mb-3', 't-w-full')} />
          <AuthItem label={labels.password} className={clsx('t-w-full')} sensitive />
        </div>
        <div className={clsx('t-flex t-flex-row t-justify-center', 't-mt-4')}>
          <SubmitButton transparent>
            <HeroIcon icon='ArrowRightCircleIcon' className={clsx('t-w-10 t-stroke-1')} />
          </SubmitButton>
        </div>
      </form>
    </Modal>
  );
};
