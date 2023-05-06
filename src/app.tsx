import { renderTimestamp } from '@/common/time';
import { Modal } from '@/components/Modal';

function App () {
  const timestamp = renderTimestamp(new Date());

  return (
    <Modal
      hidden={false}
      title={'etelie.com is under development'}
      footerLeft='Please check back in later'
      footerRight={timestamp}
    />
  );
}

export default App;
