import { renderTimestamp } from '@/common/time';
import { ReloadIcon } from './components/icons';

import { Modal, TitleCard } from './components/layout';

function App () {
  const timestamp = renderTimestamp(new Date());

  return (
    <>
      <TitleCard />
      <Modal
        hidden={false}
        controls={[
          <button onClick={() => globalThis.location.reload()}>
            <ReloadIcon size={23} inverted />
          </button>,
        ]}
        title={'etelie.com is under development'}
        footerLeft='Please check back in later'
        footerRight={timestamp}
      />
    </>
  );
}

export default App;
