import { renderTimestamp } from '@/common/time';
import { Modal } from '@/components/Modal';
import { TitleCard } from './components/TitileCard';

function App () {
  const timestamp = renderTimestamp(new Date());

  return (
    <>
      <TitleCard />
      <Modal
        hidden={false}
        title={'etelie.com is under development'}
        footerLeft='Please check back in later'
        footerRight={timestamp}
      />
    </>
  );
}

export default App;
