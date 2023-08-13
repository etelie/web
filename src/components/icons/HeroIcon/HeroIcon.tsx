import * as solidIcons from '@heroicons/react/24/solid';
import * as outlinedIcons from '@heroicons/react/24/outline';
import clsx from 'clsx';

export type HeroIconProps = {
  icon: keyof typeof solidIcons | keyof typeof outlinedIcons;
  className?: string;
  solid?: boolean;
};

export const HeroIcon = ({ className, icon, solid = false }: HeroIconProps) => {
  const Icon = solid ? solidIcons[icon] : outlinedIcons[icon];
  return <Icon className={clsx(className)} />;
};
