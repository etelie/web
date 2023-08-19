import clsx from 'clsx';
import { useState } from 'react';

export type SubmitButtonProps = {
  className?: string;
};

export const SubmitButton = ({ className }: SubmitButtonProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type='submit'
      onMouseOver={setHovered.bind(this, true)}
      onMouseOut={setHovered.bind(this, false)}
      className={clsx(
        className,
        't-bg-violet-300',
        hovered ? 't-bg-opacity-90' : 't-bg-opacity-70',
        't-rounded-md',
        't-py-2 t-px-4',
        't-font-semibold',
      )}
    >
      Submit
    </button>
  );
};
