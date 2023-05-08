import clsx from 'clsx';

import type { TailwindValue } from '@/types';

export type BookmarkIconProps = {
  size: TailwindValue;
  inverted?: boolean;
};

export const BookmarkIcon = ({ size, inverted = false }: BookmarkIconProps) => (
  <img
    className={clsx(`t-w-${size} t-h-${size}`, inverted && 't-invert')}
    src='/icon/bookmark.svg'
    width={size}
    height={size}
  />
);
