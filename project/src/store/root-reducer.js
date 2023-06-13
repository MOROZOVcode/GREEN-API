import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userData } from './user-data/user-data.slice';

export const rootReducer = combineReducers({
  [NameSpace.user]: userData.reducer,
});
