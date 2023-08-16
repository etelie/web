import { configureStore, createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import localeReducer from '@/common/locale/localeSlice';
import { apiSlice, mockApiSlice } from '@/api';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    locale: localeReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
});

export const mockStore = configureStore({
  reducer: {
    [mockApiSlice.reducerPath]: mockApiSlice.reducer,
    locale: localeReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mockApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
