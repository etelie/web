import clsx from 'clsx';

import type { TailwindValue } from '~/types';

export interface ModalProps {
  hidden: boolean;
}

export const Modal = ({ hidden }: ModalProps) => (
  <>
    <Overlay hidden={hidden} />
    <div
      tabIndex={-1}
      aria-hidden={hidden}
      className={clsx(
        't-fixed t-z-50',
        't-mx-auto',
        hidden && 't-hidden',
        't-overflow-x-hidden t-overflow-y-auto',
        't-w-64 t-h-64 sm:t-w-1/2',
        't-max-w-4xl',
        't-bg-black',
        't-border-black t-border-t-[18px] t-border-x-[6px] t-border-b-[6px] t-rounded-xl',
        'e-shadow-fore',
      )}
    >
      <div
        className={clsx('t-w-[full-6px] t-h-full', 't-bg-white', 't-border-black t-rounded-xl')}
      ></div>
    </div>
  </>
);

interface OverlayProps {
  hidden: boolean;
}

const Overlay = ({ hidden }: OverlayProps) => (
  <div
    className={clsx(
      't-fixed t-z-50',
      hidden && 't-hidden',
      't-inset-0',
      't-bg-black t-bg-opacity-10',
      't-w-screen t-h-screen',
    )}
  />
);
