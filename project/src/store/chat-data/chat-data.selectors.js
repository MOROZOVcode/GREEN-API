import { NameSpace } from '../../const';

export const getReceiptId = (state) => state[NameSpace.chat].receiptId;
export const getIdMessage = (state) => state[NameSpace.chat].idMessage;
export const getTextMessage = (state) => state[NameSpace.chat].textMessage;
export const getMessagesList = (state) => state[NameSpace.chat].messagesList;
