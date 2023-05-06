import clsx from 'clsx';

import { Icon } from '../EtelieIcon';

export type TitleCardProps = {
  hidden?: boolean;
}

export const TitleCard = ({hidden = false}: TitleCardProps) => (
  <div
    className={clsx(
      hidden && 't-hidden',
      't-fixed t-top-4 t-start-4',
      't-flex t-flex-row t-items-center t-flex-nowrap t-gap',
      't-w-64',
      't-text-3xl t-font-sans t-font-semibold',
      't-z-50',
      't-border-black t-border-[8px] t-rounded-[18px]',
      'e-shadow-fore',
    )}
  >
    <div className={clsx('t-flex-none', 't-flex t-items-center t-justify-center', 't-w-[70px]')}>
      <Icon size='48px' />
    </div>
    <div className={clsx('t-bg-black', 't-w-2 t-h-[68px]')} />
    <div className={clsx('t-flex-grow', 't-text-center')}>
      <h1>etelie</h1>
    </div>
  </div>
);
