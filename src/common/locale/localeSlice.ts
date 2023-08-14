import { Language } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
