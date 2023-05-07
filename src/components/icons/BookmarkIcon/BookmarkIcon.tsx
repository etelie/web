import clsx from 'clsx';

import type { TailwindValue } from '@/types';

export type BookmarkIconProps = {
  size: TailwindValue;
};

export const BookmarkIcon = ({ size }: BookmarkIconProps) => (
  <img
    className={clsx(`t-w-${size} t-h-${size}`)}
    src='/icon/bookmark.svg'
    width={size}
    height={size}
  />
);
