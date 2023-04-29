import type { TailwindValue } from '~/types';

export type IconProps = {
  width: TailwindValue;
  height: TailwindValue;
};

export const Icon = ({ width, height }: IconProps) => (
  <img
    className={`tw-w-${width} tw-h-${height}`}
    src='/icon/etelie.svg'
    width={width}
    height={height}
  />
);
