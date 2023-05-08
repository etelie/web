import { renderTimestamp } from '@/common/time';
import { ReloadIcon } from './components/icons';

import { Modal, TitleCard } from './components/layout';
import { ModalControlOptions } from './components/layout/Modal/ModalControl';

export default () => {
  const timestamp = renderTimestamp(new Date());

  return (
    <>
      <TitleCard />
      <Modal
        hidden={false}
        control={ModalControlOptions.RELOAD}
        title={'etelie.com is under development'}
        footerLeft='Please check back in later'
        footerRight={timestamp}
      />
    </>
  );
};
