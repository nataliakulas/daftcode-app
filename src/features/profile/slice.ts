import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User } from '../dashboard/types';

const user: User = {
  id: '',
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
    posts: [],
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    resetUser: (state) => {
      state.user = user;
    },
    setPosts: (state, { payload }) => {
      state.posts = payload;
    },
    resetPosts: (state) => {
      state.posts = [];
    },
  },
});

export const selectUser = (state: RootState) => state.profile.user;
export const selectPosts = (state: RootState) => state.profile.posts;

export const { setUser, resetUser, setPosts, resetPosts } = slice.actions;

export default slice.reducer;
