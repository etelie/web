import clsx from 'clsx';

export type BookmarkIconProps = {
  size: number;
  inverted?: boolean;
  className?: string;
};

export const BookmarkIcon = ({ className, size, inverted = false }: BookmarkIconProps) => (
  <img
    className={clsx(className, inverted && 't-invert')}
    src='/icon/bookmark.svg'
    width={size}
    height={size}
  />
);
