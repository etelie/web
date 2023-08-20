import clsx from 'clsx';
import { ReactNode, useState } from 'react';

export type SubmitButtonProps = {
  children?: ReactNode;
  className?: string;
  transparent?: boolean;
};

// todo: convert to generic Button component

export const SubmitButton = ({ children, className, transparent = false }: SubmitButtonProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type='submit'
      onMouseOver={setHovered.bind(this, true)}
      onMouseOut={setHovered.bind(this, false)}
      className={clsx(
        className,
        't-w-fit t-h-fit',
        transparent || 't-bg-violet-300',
        hovered ? 't-bg-opacity-70' : 't-bg-opacity-60',
        't-inner-border-black',
        't-rounded-md',
        't-py-2 t-px-4',
        't-text-base t-font-semibold',
      )}
    >
      {children}
    </button>
  );
};
