import { NameSpace } from '../../const';

export const getIdInstance = (state) => state[NameSpace.user].idInstance;
export const getApiTokenInstance = (state) =>
  state[NameSpace.user].apiTokenInstance;
export const getNumberPhoneContact = (state) =>
  state[NameSpace.user].numberPhoneContact;
