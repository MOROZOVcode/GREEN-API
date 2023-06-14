import { createSlice } from '@reduxjs/toolkit';
import { dropMessageAction, fetchMessageAction } from '../api-action';
import { NameSpace } from '../../const';

const initialState = {
  receiptId: null,
  idMessage: null,
  textMessage: '',
};

export const chatData = createSlice({
  name: NameSpace.chat,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMessageAction.fulfilled, (state, action) => {
        state.receiptId = action.payload.receiptId;
        state.idMessage = action.payload.body.idMessage;
        state.textMessage =
          action.payload.body.messageData.textMessageData.textMessage;
      })
      .addCase(dropMessageAction.fulfilled, (state) => {
        state.receiptId = null;
        state.textMessage = '';
      });
  },
});
