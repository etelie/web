import clsx from 'clsx';

import { CheckCircleIcon as CheckCircleIconOutlined } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleIconSolid } from '@heroicons/react/24/solid';
import { TailwindValue } from '@/types';

export type CheckCircleIconProps = {
  size: TailwindValue;
  className?: string;
  solid?: boolean;
};

export const CheckCircleIcon = ({ className, size, solid = false }: CheckCircleIconProps) => {
  return solid ? (
    <CheckCircleIconSolid className={clsx(className, `t-w-${size} t-h-${size}`)} />
  ) : (
    <CheckCircleIconOutlined className={clsx(className, `t-w-${size} t-h-${size}`)} />
  );
};
