import clsx from 'clsx';

export type CloseIconProps = {
  size: number;
  inverted?: boolean;
  className?: string;
};

export const CloseIcon = ({ className, size, inverted = false }: CloseIconProps) => (
  <img
    className={clsx(className, inverted && 't-invert')}
    src='/icon/close.svg'
    width={size}
    height={size}
  />
);
