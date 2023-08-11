import clsx from 'clsx';

import type { TailwindValue } from '@/types';

export type EtelieIconProps = {
  size: TailwindValue;
  className?: string;
};

export const EtelieIcon = ({ className, size }: EtelieIconProps) => (
  <img
    className={clsx(className, `t-w-${size} t-h-${size}`)}
    src='/icon/etelie.svg'
    width={size}
    height={size}
  />
);
