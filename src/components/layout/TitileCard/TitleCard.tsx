import clsx from 'clsx';

import { EtelieIcon } from '@/components/icons';

export type TitleCardProps = {
  hidden?: boolean;
};

export const TitleCard = ({ hidden = false }: TitleCardProps) => (
  <div
    className={clsx(
      't-invisible',
      !hidden && 'md:t-visible',
      't-fixed t-top-4 t-start-4',
      't-flex t-flex-row t-items-center t-flex-nowrap t-gap',
      't-w-60',
      't-text-3xl t-font-sans t-font-medium t-text-center',
      't-z-30',
      't-border-black t-border-[7px] t-rounded-[18px]',
      'e-shadow-fore',
    )}
  >
    <div className={clsx('t-flex-none', 't-flex t-items-center t-justify-center', 't-w-[62px]')}>
      <EtelieIcon size='40px' />
    </div>
    <div className={clsx('t-bg-black', 't-w-[7px] t-h-[60px]')} />
    <div className={clsx('t-flex-grow')}>
      <h1>etelie</h1>
    </div>
  </div>
);
