import clsx from 'clsx';
import { useState } from 'react';

import { TextInput, types as text_input_types } from '~/components/input/TextInput';
import { Modal, sizes as modal_sizes } from '~/components/layout/Modal';
import { Label } from '~/components/typography/Label';

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

export type AuthPageProps = {};

export const AuthPage = ({}: AuthPageProps) => {
  return (
    <Modal title={'Authentication'} size={modal_sizes.sm}>
      {/* todo: wrap with form */}
      <div className={clsx('t-flex t-flex-col t-justify-between t-items-start', 't-mt-2')}>
        <AuthItem label='User name' className={clsx('t-mb-2')} />
        <AuthItem label='Password' sensitive />
      </div>
    </Modal>
  );
};
