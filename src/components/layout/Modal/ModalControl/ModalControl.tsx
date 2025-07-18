import clsx from 'clsx';
import React from 'react';
import { ReactNode } from 'react';

import { CloseIcon, ReloadIcon } from '~/components/icons';

const MODAL_BUTTON_WIDTH = 39;
const SEPARATOR_WIDTH = 8;
const LEFT_CAP_WIDTH = 4;

export enum ModalControlOptions {
  RELOAD,
  CLOSE,
  RELOAD_AND_CLOSE,
}

export type ModalControlCallback = (action: ModalControlOptions) => void;

/**
 * Get the list of modal controllers for a given control option
 */
const getModalControllers = (
  control: ModalControlOptions,
  callback?: ModalControlCallback,
): Array<ReactNode> => {
  switch (control) {
    case ModalControlOptions.RELOAD:
      return [
        <button onClick={() => globalThis.location.reload()}>
          <ReloadIcon size={27} inverted />
        </button>,
      ];
    case ModalControlOptions.CLOSE:
      return [
        <button onClick={callback?.bind(this, ModalControlOptions.CLOSE)}>
          <CloseIcon size={27} inverted />
        </button>,
      ];
    case ModalControlOptions.RELOAD_AND_CLOSE:
      return [
        getModalControllers(ModalControlOptions.RELOAD),
        getModalControllers(ModalControlOptions.CLOSE),
      ];
  }
};

export type ModalControlProps = {
  control: ModalControlOptions;
  callback?: ModalControlCallback;
};

export const ModalControl = ({ control, callback }: ModalControlProps) => {
  const controls: Array<ReactNode> = getModalControllers(control, callback);

  return (
    <>
      {controls.map((c, index) => (
        <React.Fragment key={index}>
          <RightSeparator index={index} />
          <ModalControlItem index={index}>{c}</ModalControlItem>
        </React.Fragment>
      ))}
      <LeftSeparator index={controls.length - 1} />
    </>
  );
};

type ModalControlItemProps = {
  index: number;
  children: ReactNode;
};

const ModalControlItem = ({ index, children }: ModalControlItemProps) => {
  const width = MODAL_BUTTON_WIDTH;
  const right = SEPARATOR_WIDTH + index * (SEPARATOR_WIDTH + MODAL_BUTTON_WIDTH);

  return (
    <div
      style={{ width, right }}
      className={clsx(
        't-absolute',
        't-top-[-1px]', // 1px render clip compensation
        't-right-[8px]',
        't-bg-black',
        't-h-[35px]', // 1px render clip compensation
        't-rounded-b-[5px]',
        't-flex t-flex-row',
        't-justify-center t-content-center',
      )}
    >
      {children}
    </div>
  );
};

type RightSeparatorProps = {
  index: number;
};

const RightSeparator = ({ index }: RightSeparatorProps) => {
  const width = SEPARATOR_WIDTH;
  const right = index * (SEPARATOR_WIDTH + MODAL_BUTTON_WIDTH);

  return (
    <div style={{ right, width }} className={clsx('t-absolute', 't-top-0', 't-h-[4px]')}>
      <div
        style={{ width: width + 2 }} // 2 1px render clip compensation (right + left)
        className={clsx('t-absolute', 't-top-0 t-right-[-1px]', 't-bg-black', 't-h-[4px]')}
      ></div>
      <div
        style={{ width }}
        className={clsx(
          't-absolute',
          't-top-0 t-right-0',
          't-bg-white',
          't-h-[5px]', // 1px render clip compensation
          't-rounded-t-[4px]',
        )}
      />
    </div>
  );
};

type LeftSeparatorProps = {
  /** zero-indexed */
  index: number;
  continuing?: boolean;
};

const LeftSeparator = ({ index, continuing = false }: LeftSeparatorProps) => {
  const width = continuing ? SEPARATOR_WIDTH : LEFT_CAP_WIDTH;
  const right = (index + 1) * (MODAL_BUTTON_WIDTH + SEPARATOR_WIDTH); // 1px render clip compensation

  return (
    <div style={{ right, width }} className={clsx('t-absolute', 't-top-0', 't-h-[4px]')}>
      <div
        style={{ width: width + 1 }}
        className={clsx('t-absolute', 't-right-[-1px]', 't-h-full', 't-bg-black')}
      />
      <div
        style={{ width: width + 1 }}
        className={clsx('t-absolute', 't-right-0', 't-h-[5px]', 't-bg-white', 't-rounded-tr-[4px]')}
      />
    </div>
  );
};
