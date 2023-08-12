import clsx from 'clsx';

export type EtelieIconProps = {
  size: number;
  className?: string;
};

export const EtelieIcon = ({ className, size }: EtelieIconProps) => (
  <img
    className={clsx(className)}
    src='/icon/etelie.svg'
    width={size}
    height={size}
  />
);
