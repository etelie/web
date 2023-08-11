import clsx from 'clsx';

import type { TailwindValue } from '@/types';

export type CloseIconProps = {
  size: TailwindValue;
  inverted?: boolean;
  className?: string;
};

export const CloseIcon = ({ className, size, inverted = false }: CloseIconProps) => (
  <img
    className={clsx(className, `t-w-${size} t-h-${size}`, inverted && 't-invert')}
    src='/icon/close.svg'
    width={size}
    height={size}
  />
);
