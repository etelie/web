import clsx from 'clsx';

export type ReloadIconProps = {
  size: number;
  inverted?: boolean;
  className?: string;
};

export const ReloadIcon = ({ className, size, inverted = false }: ReloadIconProps) => (
  <img
    className={clsx(className, inverted && 't-invert')}
    src='/icon/reload.svg'
    width={size}
    height={size}
  />
);
