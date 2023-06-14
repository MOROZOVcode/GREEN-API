import { createSlice } from '@reduxjs/toolkit';
import { fetchMessageAction } from '../api-action';

const initialState = {
  newMessage: {},
};

export const chatData = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {},
  extraReducer(builder) {
    builder.addCase(fetchMessageAction.pending, (state) => {
      state.newMessage = action.payload;
    });
  },
});
