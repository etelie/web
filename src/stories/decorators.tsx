import { StoryContext, StoryFn, StrictArgs } from '@storybook/react';
import clsx from 'clsx';
import { Provider } from 'react-redux';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

import { mockStore } from '@/store';

export const MockStoreWithStore =
  (store: ToolkitStore) => (Story: StoryFn, context: StoryContext) => {
    return (
      <Provider store={store}>
        <Story />
      </Provider>
    );
  };
export const MockStore = MockStoreWithStore(mockStore);

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
