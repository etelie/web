import clsx from 'clsx';

import { CheckCircleIcon as IconOutlined } from '@heroicons/react/24/outline';
import { CheckCircleIcon as IconSolid } from '@heroicons/react/24/solid';

export type CheckCircleIconProps = {
  className?: string;
  solid?: boolean;
};

export const CheckCircleIcon = ({ className, solid = false }: CheckCircleIconProps) => {
  const Icon = solid ? IconSolid : IconOutlined;
  return <Icon className={clsx(className)} />;
};
