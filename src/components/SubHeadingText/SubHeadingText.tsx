import { clsx } from 'clsx';

export type SubHeadingTextProps = {
  id?: string;
  children?: string;
  className?: string;
};

export const SubHeadingText = ({ id, children, className }: SubHeadingTextProps) => (
  <h1 id={id} className={clsx(className, 't-font-sans', 't-text-sm md:t-text-base')}>
    {children}
  </h1>
);
