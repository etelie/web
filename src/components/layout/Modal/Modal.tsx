import clsx from 'clsx';
import { ReactNode, useId } from 'react';

import { EtelieIcon } from '@/components/icons';
import { HeadingText, SubHeadingText } from '@/components/typography';
import { ModalControl, ModalControlOptions } from './ModalControl';

export const sizes = {
  sm: 'sm',
  md: 'md',
} as const;

export type ModalSize = (typeof sizes)[keyof typeof sizes];

export type ModalProps = {
  title: string;
  size?: ModalSize;
  control?: ModalControlOptions;
  hidden?: boolean;
  logoHidden?: boolean;
  children?: ReactNode;
  footerLeft?: string;
  footerRight?: string;
  closeCallback?: () => void;
};

export const Modal = ({
  children,
  title,
  footerLeft,
  footerRight,
  control,
  size = sizes.md,
  hidden = false,
  logoHidden = false,
  closeCallback = () => {},
}: ModalProps) => {
  const titleId = useId();

  const width =
    size === sizes.md
      ? 't-w-96 sm:t-w-3/4 lg:t-w-4xl'
      : size === sizes.sm
      ? 't-w-96 md:t-w-112'
      : Error(`Invalid modal size value :: [${size}]`);

  return (
    <>
      <Overlay hidden={hidden} />
      <div // Screen container
        className={clsx(
          hidden && 't-hidden',
          't-flex t-flex-col t-justify-center',
          't-h-screen',
          't-fixed t-inset-0',
          't-z-50',
        )}
      >
        <div // Modal background/border
          tabIndex={-1}
          aria-hidden={hidden}
          role='dialog'
          className={clsx(
            't-relative',
            't-mx-auto t-my-auto',
            't-overflow-x-hidden t-overflow-y-auto',
            width,
            't-max-h-2xl',
            't-bg-black',
            't-border-black t-border-t-[18px] t-border-x-[6px] t-border-b-[6px]',
            't-rounded-[18px]', // outer rounding = inner rounding + border width
            'e-shadow-fore',
          )}
        >
          {control !== undefined && (
            <ModalControl
              control={control}
              callback={action => {
                switch (action) {
                  case ModalControlOptions.CLOSE:
                    closeCallback();
                }
              }}
            />
          )}
          <div // Modal content
            className={clsx(
              't-w-[full-6px] t-h-full',
              't-overflow-y-auto t-overflow-x-clip',
              't-bg-white',
              't-border-black t-rounded-[12px]',
              control !== undefined && 't-rounded-tr-none',
              't-py-6 t-px-8',
            )}
          >
            <div className={clsx('t-flex t-flex-col t-justify-between', 't-h-full')}>
              {logoHidden ? null : (
                <div className={clsx('t-mb-7')}>
                  <EtelieIcon size={50} />
                </div>
              )}
              <HeadingText id={titleId} className={clsx(logoHidden && 't-mt-3', 't-mb-3')}>
                {title}
              </HeadingText>
              {children && <div className={clsx('t-my-1.5')}>{children}</div>}
              {(footerLeft || footerRight) && (
                <footer
                  className={clsx(
                    't-flex t-flex-col sm:t-flex-row t-justify-between',
                    't-mt-3',
                    't-space-y-1 sm:t-space-y-0 sm:t-space-x-3',
                  )}
                >
                  <SubHeadingText className={clsx('t-relative t-start-0')}>
                    {footerLeft}
                  </SubHeadingText>
                  <SubHeadingText className={clsx('t-relative t-end-0')}>
                    {footerRight}
                  </SubHeadingText>
                </footer>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

type OverlayProps = {
  hidden: boolean;
};

const Overlay = ({ hidden }: OverlayProps) => (
  <div
    className={clsx(
      't-fixed t-z-40',
      hidden && 't-hidden',
      't-inset-0',
      't-bg-slate-100 t-bg-opacity-50 t-backdrop-blur-2xs',
      't-w-screen t-h-screen',
    )}
  />
);
