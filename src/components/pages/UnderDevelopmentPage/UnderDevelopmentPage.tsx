import { useAppSelector } from '~/store';
import { renderTimestamp } from '~/common/time';
import { EmailForm } from '~/components/layout/EmailForm';
import { Modal, sizes } from '~/components/layout/Modal';
import { ModalControlOptions } from '~/components/layout/Modal/ModalControl';

export type UnderDevelopmentPageProps = {};

export const UnderDevelopmentPage = ({}: UnderDevelopmentPageProps) => {
  const locale = useAppSelector(state => state.locale.language);
  const timestamp = renderTimestamp(new Date(), locale);

  return (
    <Modal
      size={sizes.md}
      hidden={false}
      control={ModalControlOptions.RELOAD}
      title={'etelie.com is under development'}
    >
      <EmailForm />
    </Modal>
  );
};
