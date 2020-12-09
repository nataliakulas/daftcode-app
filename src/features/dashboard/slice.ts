import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const slice = createSlice({
  name: 'dashboard',
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    resetUsers: (state) => {
      state.users = [];
    },
  },
});

export const selectUsers = (state: RootState) => state.dashboard.users;

export const { setUsers, resetUsers } = slice.actions;

export default slice.reducer;
