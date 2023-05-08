import { StoryContext, StoryFn, StrictArgs } from '@storybook/react';
import clsx from 'clsx';

interface IconArgs extends StrictArgs {
  size: number;
  inverted?: boolean;
}

export const IconBlackBackgroundWithMargin =
  (margin: number) => (Story: StoryFn, context: StoryContext) => {
    const size = (context.args as IconArgs).size + margin;

    return (
      <div
        style={{ width: size, height: size }}
        className={clsx('t-bg-black', 't-rounded-lg', 't-flex t-justify-center')}
      >
        <Story />
      </div>
    );
  };
export const IconBlackBackground = IconBlackBackgroundWithMargin(4);
