import clsx from 'clsx';
import { ReactNode, useId } from 'react';

import { BookmarkIcon, EtelieIcon, ReloadIcon } from '@/components/icons';
import { HeadingText, SubHeadingText } from '@/components/typography';
import { ModalControl, ModalControlOptions } from './ModalControl';

export type ModalProps = {
  title: string;
  controls?: Array<ReactNode>;
  control?: ModalControlOptions;
  hidden?: boolean;
  iconHidden?: boolean;
  children?: ReactNode;
  footerLeft?: string;
  footerRight?: string;
};

export const Modal = ({
  children,
  title,
  footerLeft,
  footerRight,
  control,
  hidden = false,
  iconHidden = false,
}: ModalProps) => {
  const titleId = useId();

  return (
    <>
      <Overlay hidden={hidden} />
      <div
        className={clsx(
          hidden && 't-hidden',
          't-flex t-flex-col t-justify-center',
          't-h-screen',
          't-fixed t-inset-0',
          't-z-50',
        )}
      >
        <div
          tabIndex={-1}
          aria-hidden={hidden}
          aria-labeledby={titleId}
          role='dialog'
          className={clsx(
            't-relative',
            't-mx-auto t-my-auto',
            't-overflow-x-hidden t-overflow-y-auto',
            't-w-96 sm:t-w-3/4 lg:t-w-4xl',
            't-max-h-2xl',
            't-bg-black',
            't-border-black t-border-t-[18px] t-border-x-[6px] t-border-b-[6px] t-rounded-xl',
            'e-shadow-fore',
          )}
        >
          {control !== undefined && <ModalControl control={control} />}
          <div
            className={clsx(
              't-w-[full-6px] t-h-full',
              't-overflow-y-auto t-overflow-x-clip',
              't-bg-white',
              't-border-black t-rounded-xl t-rounded-tr-none',
              't-py-6 t-px-8',
            )}
          >
            <div className={clsx('t-flex t-flex-col t-justify-between', 't-h-full')}>
              {iconHidden ? null : (
                <div className={clsx('t-mb-7')}>
                  <EtelieIcon size={50} />
                </div>
              )}
              <HeadingText id={titleId} className={clsx(iconHidden && 't-mt-3', 't-mb-3')}>
                {title}
              </HeadingText>
              <div>{children}</div>
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
