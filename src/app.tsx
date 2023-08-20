import { renderTimestamp } from '~/common/time';
import { useAppSelector } from '~/store';
import { Modal, TitleCard } from '~/components/layout';
import { EmailForm } from '~/components/layout/EmailForm';
import { ModalControlOptions } from '~/components/layout/Modal/ModalControl';
import { AuthPage } from '~/components/layout/AuthPage';
import { sizes } from '~/components/layout/Modal';

export default () => {
  const locale = useAppSelector(state => state.locale.language);
  const timestamp = renderTimestamp(new Date(), locale);

  return (
    <>
      <TitleCard />
      {true ? ( // todo: use React Router
        <Modal
          size={sizes.md}
          hidden={false}
          control={ModalControlOptions.RELOAD}
          title={'etelie.com is under development'}
          footerLeft='Please check back in later'
          footerRight={timestamp}
        >
          {false && <EmailForm />}
        </Modal>
      ) : (
        <AuthPage />
      )}
    </>
  );
};
