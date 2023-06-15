import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../const';

export const fetchMessageAction = createAsyncThunk(
  'chat/fetchMessage',
  async ({ idInstance, apiTokenInstance }, { dispatch, extra: api }) => {
    const { data } = await api.get(
      `${APIRoute.idInstance}${idInstance}${APIRoute.receiveNot}/${apiTokenInstance}`
    );
    return data;
  }
);

export const dropMessageAction = createAsyncThunk(
  'chat/dropMessage',
  async (
    { idInstance, apiTokenInstance, receiptId },
    { dispatch, extra: api }
  ) => {
    await api.delete(
      `${APIRoute.idInstance}${idInstance}${APIRoute.deleteNot}/${apiTokenInstance}/${receiptId}`
    );
  }
);

export const sendMessageAction = createAsyncThunk(
  'chat/sendMessage',
  async (
    { idInstance, apiTokenInstance, chatId, message },
    { dispatch, extra: api }
  ) => {
    await api.post(
      `${APIRoute.idInstance}${idInstance}${APIRoute.sendMessage}/${apiTokenInstance}`,
      {
        chatId,
        message,
      }
    );
  }
);
