import clsx from 'clsx';

import { Icon } from '../Icon';

export const TitleCard = () => (
  <div
    className={clsx(
      'tw-flex tw-flex-row tw-items-center tw-flex-nowrap tw-gap',
      'tw-w-64',
      'tw-text-3xl tw-font-sans tw-font-semibold',
      'tw-z-50',
      'tw-border-black tw-border-[8px] tw-rounded-[18px]',
      'tw-shadow-lg tw-shadow-slate-300',
    )}
  >
    <div
      className={clsx(
        'tw-flex-none',
        'tw-flex tw-items-center tw-justify-center',
        'tw-w-[70px]',
      )}
    >
      <Icon width='48px' height='48px' />
    </div>
    <div className={clsx('tw-bg-black', 'tw-w-2 tw-h-[68px]')} />
    <div className={clsx('tw-flex-grow', 'tw-text-center')}>
      <h1>etelie</h1>
    </div>
  </div>
);
