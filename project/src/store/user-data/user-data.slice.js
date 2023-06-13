import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const initialState = {
  idInstance: null,
  apiTokenInstance: '',
  numberPhone: null,
};

export const userData = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    setIdUser: (state, action) => {
      state.idInstance = action.payload;
    },
    setApiTokenUser: (state, action) => {
      state.apiTokenInstance = action.payload;
    },
    addNumberPhone: (state, action) => {
      state.numberPhone = action.payload;
    },
  },
});

export const { setIdUser, setApiTokenUser, addNumberPhone } = userData.actions;
