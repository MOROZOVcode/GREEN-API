import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const initialState = {
  idInstance: null,
  apiTokenInstance: '',
  numberPhoneContact: null,
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
    setNumberPhoneContact: (state, action) => {
      state.numberPhoneContact = action.payload;
    },
  },
});

export const { setIdUser, setApiTokenUser, setNumberPhoneContact } =
  userData.actions;
