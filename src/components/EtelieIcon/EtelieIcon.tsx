import clsx from 'clsx';

import type { TailwindValue } from '~/types';

export interface IconProps {
  width: TailwindValue;
  height: TailwindValue;
}

export const EtelieIcon = ({ width, height }: IconProps) => (
  <img
    className={clsx(`t-w-${width} t-h-${height}`)}
    src='/icon/etelie.svg'
    width={width}
    height={height}
  />
);
