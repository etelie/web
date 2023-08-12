import clsx from 'clsx';

import { CheckCircleIcon as CheckCircleIconOutlined } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleIconSolid } from '@heroicons/react/24/solid';

export type CheckCircleIconProps = {
  className?: string;
  solid?: boolean;
};

export const CheckCircleIcon = ({ className, solid = false }: CheckCircleIconProps) => {
  return solid ? (
    <CheckCircleIconSolid className={clsx(className)} />
  ) : (
    <CheckCircleIconOutlined className={clsx(className)} />
  );
};
