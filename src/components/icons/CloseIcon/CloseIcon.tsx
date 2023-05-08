import clsx from 'clsx';

import type { TailwindValue } from '@/types';

export type CloseIconProps = {
  size: TailwindValue;
  inverted?: boolean;
};

export const CloseIcon = ({ size, inverted = false }: CloseIconProps) => (
  <img
    className={clsx(`t-w-${size} t-h-${size}`, inverted && 't-invert')}
    src='/icon/close.svg'
    width={size}
    height={size}
  />
);
