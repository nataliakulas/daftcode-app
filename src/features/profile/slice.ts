import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User } from '../dashboard/types';

const user: User = {
  id: 0,
  name: '',
  email: '',
  phone: '',
  website: '',
  company: {
    catchPhrase: '',
  },
};

const slice = createSlice({
  name: 'profile',
  initialState: {
    user,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    resetUser: (state) => {
      state.user = user;
    },
  },
});

export const selectUser = (state: RootState) => state.profile.user;

export const { setUser, resetUser } = slice.actions;

export default slice.reducer;
