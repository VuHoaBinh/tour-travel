import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isLoggedIn: false,
  } as ProfileType,
  reducers: {
    signIn: (state, { payload }: PayloadAction<ProfileType>) => {
      const profile = { ...payload, isLoggedIn: true };
      return profile;
    },
    signOut: (state) => {
      const profile = { isLoggedIn: false };
      return profile;
    },
  },
});

export const { signIn, signOut } = profileSlice.actions;

export const profileSelector = ({ profile }: RootState) => profile;
