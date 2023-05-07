import clsx from 'clsx';

import type { TailwindValue } from '@/types';

export type EtelieIconType = typeof EtelieIcon;
export type EtelieIconProps = {
  size: TailwindValue;
};

export const EtelieIcon = ({ size }: EtelieIconProps) => (
  <img
    className={clsx(`t-w-${size} t-h-${size}`)}
    src='/icon/etelie.svg'
    width={size}
    height={size}
  />
);
