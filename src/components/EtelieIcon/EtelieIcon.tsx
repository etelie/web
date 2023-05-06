import clsx from 'clsx';

import type { TailwindValue } from '@/types';

export type IconProps = {
  size: TailwindValue;
};

export const EtelieIcon = ({ size }: IconProps) => (
  <img
    className={clsx(`t-w-${size} t-h-${size}`)}
    src='/icon/etelie.svg'
    width={size}
    height={size}
  />
);
