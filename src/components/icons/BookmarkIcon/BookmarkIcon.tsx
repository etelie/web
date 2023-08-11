import clsx from 'clsx';

import type { TailwindValue } from '@/types';

export type BookmarkIconProps = {
  size: TailwindValue;
  inverted?: boolean;
  className?: string;
};

export const BookmarkIcon = ({ className, size, inverted = false }: BookmarkIconProps) => (
  <img
    className={clsx(className, `t-w-${size} t-h-${size}`, inverted && 't-invert')}
    src='/icon/bookmark.svg'
    width={size}
    height={size}
  />
);
