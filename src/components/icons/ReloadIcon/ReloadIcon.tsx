import clsx from 'clsx';

import type { TailwindValue } from '@/types';

export type ReloadIconProps = {
  size: TailwindValue;
  inverted?: boolean;
  className?: string;
};

export const ReloadIcon = ({ className, size, inverted = false }: ReloadIconProps) => (
  <img
    className={clsx(className, `t-w-${size} t-h-${size}`, inverted && 't-invert')}
    src='/icon/reload.svg'
    width={size}
    height={size}
  />
);
