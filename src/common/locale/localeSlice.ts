import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Language } from '@/common/locale/types';

export const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    language: window.navigator.language as Language,
  },
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export default localeSlice.reducer;
