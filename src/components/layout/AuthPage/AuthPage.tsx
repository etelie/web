import { TextInput, types } from '~/components/input/TextInput';
import { Modal, sizes } from '~/components/layout/Modal';

type AuthItemProps = {
  label: string;
  sensitive?: boolean;
};

const AuthItem = ({ label, sensitive = false }: AuthItemProps) => {
  return (
    <div className='t-flex t-flex-col t-justify-between t-items-start'>
      <label>{label}</label>
      <TextInput type={sensitive ? types.password : types.text} name={label} />
    </div>
  );
};

export type AuthPageProps = {};

export const AuthPage = ({}: AuthPageProps) => {
  return (
    <Modal title={'Authentication'} size={sizes.sm}>
      <div className='t-flex t-flex-col t-justify-between t-items-start'>
        <AuthItem label='User name' />
        <AuthItem label='Password' sensitive />
      </div>
    </Modal>
  );
};
