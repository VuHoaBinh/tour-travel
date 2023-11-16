import { PaletteMode } from '@mui/material';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type SwitchThemePayload = {
  mode: PaletteMode;
};

type ThemeState = {
  mode: PaletteMode;
};

const initialState: ThemeState = {
  mode: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state, { payload }: PayloadAction<SwitchThemePayload>) => {
      return { ...state, ...payload };
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export const themeSelector = ({ theme }: RootState) => ({ ...theme, isDark: theme.mode === 'dark' });
