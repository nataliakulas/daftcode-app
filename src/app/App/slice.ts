import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const slice = createSlice({
  name: 'app',
  initialState: {
    modal: '',
  },
  reducers: {
    modalOpen: (state, { payload }) => {
      state.modal = payload;
    },
    modalClose: (state) => {
      state.modal = '';
    },
  },
});

export const selectModal = (state: RootState) => state.app.modal;

export const { modalOpen, modalClose } = slice.actions;

export default slice.reducer;
