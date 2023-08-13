import clsx from 'clsx';

import { EllipsisHorizontalCircleIcon as IconOutlined } from '@heroicons/react/24/outline';
import { EllipsisHorizontalCircleIcon as IconSolid } from '@heroicons/react/24/solid';

export type EllipsisCircleIconProps = {
  className?: string;
  solid?: boolean;
};

export const EllipsisCircleIcon = ({ className, solid = false }: EllipsisCircleIconProps) => {
  const Icon = solid ? IconSolid : IconOutlined;
  return <Icon className={clsx(className)} />;
};
