import clsx from 'clsx';

import type { TailwindValue } from '@/types';

export type ReloadIconProps = {
  size: TailwindValue;
};

export const ReloadIcon = ({ size }: ReloadIconProps) => (
  <img
    className={clsx(`t-w-${size} t-h-${size}`)}
    src='/icon/reload.svg'
    width={size}
    height={size}
  />
);
