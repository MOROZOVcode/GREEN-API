import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userData } from './user-data/user-data.slice';
import { chatData } from './chat-data/chat-data.slice';

export const rootReducer = combineReducers({
  [NameSpace.user]: userData.reducer,
  [NameSpace.chat]: chatData.reducer,
});
