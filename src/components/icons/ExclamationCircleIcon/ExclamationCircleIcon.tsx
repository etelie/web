import clsx from 'clsx';

import { ExclamationCircleIcon as IconOutlined } from '@heroicons/react/24/outline';
import { ExclamationCircleIcon as IconSolid } from '@heroicons/react/24/solid';

export type ExclamationCircleIconProps = {
  className?: string;
  solid?: boolean;
};

export const ExclamationCircleIcon = ({ className, solid = false }: ExclamationCircleIconProps) => {
  const Icon = solid ? IconSolid : IconOutlined;
  return <Icon className={clsx(className)} />;
};
