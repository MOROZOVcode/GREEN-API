import { NameSpace } from '../../const';

export const getNewMessage = (state) => state[NameSpace.chat].newMessage;
