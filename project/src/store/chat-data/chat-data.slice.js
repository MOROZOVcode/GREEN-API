import { createSlice } from '@reduxjs/toolkit';
import { dropMessageAction, fetchMessageAction } from '../api-action';
import { NameSpace } from '../../const';

const initialState = {
  receiptId: null,
  idMessage: null,
  textMessage: '',
  messagesList: [],
};

export const chatData = createSlice({
  name: NameSpace.chat,
  initialState,
  reducers: {
    setMessagesList: (state, action) => {
      state.messagesList = action.payload;
    },
  },
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

export const { setMessagesList } = chatData.actions;
