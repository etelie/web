import clsx from 'clsx';

import type { TailwindValue } from '@/types';

export type ReloadIconProps = {
  size: TailwindValue;
  inverted?: boolean;
};

export const ReloadIcon = ({ size, inverted = false }: ReloadIconProps) => (
  <img
    className={clsx(`t-w-${size} t-h-${size}`, inverted && 't-invert')}
    src='/icon/reload.svg'
    width={size}
    height={size}
  />
);
