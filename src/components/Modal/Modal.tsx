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
        'tw-fixed tw-z-50',
        hidden && 'tw-hidden',
        'tw-overflow-x-hidden tw-overflow-y-auto',
        'tw-w-64 tw-h-64 sm:tw-w-80 md:tw-w-96 lg:tw-w-1/2',
        'tw-bg-black',
        'tw-border-black tw-border-t-[18px] tw-border-x-[6px] tw-border-b-[6px] tw-rounded-xl',
        'e-shadow-fore',
      )}
    >
      <div
        className={clsx(
          'tw-w-[full-6px] tw-h-full',
          'tw-bg-white',
          'tw-border-black tw-rounded-xl',
        )}
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
      'tw-fixed tw-z-50',
      hidden && 'tw-hidden',
      'tw-inset-0',
      'tw-bg-black tw-bg-opacity-10',
      'tw-w-screen tw-h-screen',
    )}
  />
);
