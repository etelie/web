import { clsx } from 'clsx';

export type HeadingTextProps = {
  id?: string;
  children?: string;
  className?: string;
};

export const HeadingText = ({ id, children, className }: HeadingTextProps) => (
  <h1 id={id} className={clsx(className, 't-font-sans', 't-text-3xl md:t-text-4xl t-font-semibold')}>
    {children}
  </h1>
);
