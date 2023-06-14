import { createSlice } from '@reduxjs/toolkit';
import { dropMessageAction, fetchMessageAction } from '../api-action';

const initialState = {
  receiptId: null,
  idMessage: null,
  textMessage: '',
};

export const chatData = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {},
  extraReducer(builder) {
    builder
      .addCase(fetchMessageAction.fulfilled, (state) => {
        state.receiptId = action.payload.receiptId;
        state.idMessage = action.payload.body.idMessage;
        state.textMessage = action.payload.body.messageData.typeMessage;
      })
      .addCase(dropMessageAction.fulfilled, (state) => {
        state.receiptId = null;
        state.textMessage = '';
      });
  },
});
