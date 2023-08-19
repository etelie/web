import { clsx } from 'clsx';

export type LabelProps = {
  id?: string;
  className?: string;
  children?: string;
};

export const Label = ({ children, className, ...options }: LabelProps) => {
  return (
    <label className={clsx(className, 't-font-sans', 't-text-sm md:t-text-sm')} {...options}>
      {children}
    </label>
  );
};
