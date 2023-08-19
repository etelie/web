import clsx from 'clsx';

import { TextInput, types as text_input_types } from '~/components/input/TextInput';
import { Modal, sizes as modal_sizes } from '~/components/layout/Modal';
import { Label } from '~/components/typography/Label';

// todo: AuthItem.tsx

type AuthItemProps = {
  label: string;
  className?: string;
  sensitive?: boolean;
};

const AuthItem = ({ label, className, sensitive = false }: AuthItemProps) => {
  return (
    <div className={clsx(className, 't-flex t-flex-col t-justify-between t-items-start')}>
      <Label className={clsx('-t-mb-[2px]')}>{label}</Label>
      <TextInput
        type={sensitive ? text_input_types.password : text_input_types.text}
        name={label}
      />
    </div>
  );
};

// todo: investigate Formik

// todo: form folder

export type AuthPageProps = {};

export const AuthPage = ({}: AuthPageProps) => {
  const labels = {
    username: 'User name',
    password: 'Password',
  };

  return (
    <Modal title={'Authentication'} size={modal_sizes.sm}>
      <form
        onSubmit={e => {
          e.preventDefault();
          const data = new FormData(e.currentTarget); // todo: create utility function for building and parsing FormData
          const username = data.get(labels.username);
          const password = data.get(labels.password);
          console.log(`username: ${username}\npassword: ${password}`);
        }}
      >
        <div className={clsx('t-flex t-flex-col t-justify-between t-items-start', 't-mt-2')}>
          <AuthItem label={labels.username} className={clsx('t-mb-2')} />
          <AuthItem label={labels.password} sensitive />
          <div className={clsx('t-w-full', 't-flex t-flex-row t-justify-end')}>
            {/* todo: styled submit button component */}
            <button type='submit'>Submit</button>
          </div>
        </div>
      </form>
    </Modal>
  );
};
