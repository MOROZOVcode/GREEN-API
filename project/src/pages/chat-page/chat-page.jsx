import { Link, useNavigate } from 'react-router-dom';
import './chat-page.css';
import { AppRoute, messageClass } from '../../const';
import { useAppDispatch, useAppSelector, useInterval } from '../../hooks';
import {
  getApiTokenInstance,
  getIdInstance,
  getNumberPhoneContact,
} from '../../store/user-data/user-data.selectors';
import {
  dropMessageAction,
  fetchMessageAction,
  sendMessageAction,
} from '../../store/api-action';
import {
  getChatId,
  getMessagesList,
  getReceiptId,
  getTextMessage,
} from '../../store/chat-data/chat-data.selectors';
import { setMessagesList } from '../../store/chat-data/chat-data.slice';
import MessagesContainer from '../../components/messages-container/messages-container';
import { useState } from 'react';
import { useRef } from 'react';

export default function ChatPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const inputRef = useRef(null);

  const idInstance = useAppSelector(getIdInstance);
  const apiTokenInstance = useAppSelector(getApiTokenInstance);
  const numberPhoneContact = useAppSelector(getNumberPhoneContact);

  const receiptId = useAppSelector(getReceiptId);
  const chatId = useAppSelector(getChatId);
  const textMessage = useAppSelector(getTextMessage);

  const messagesList = useAppSelector(getMessagesList);
  const newMessagesList = [...messagesList];

  const [delay, setDelay] = useState(2500);

  const createDataMessage = (className, textMessage) => {
    return {
      className,
      textMessage,
    };
  };

  useInterval(() => {
    fetchMessage();
  }, delay);

  const handleExit = (evt) => {
    evt.preventDefault();
    setDelay(null);
    navigate(AppRoute.login);
  };

  const fetchMessage = () => {
    dispatch(fetchMessageAction({ idInstance, apiTokenInstance }));
    if (textMessage !== '' && chatId === getMyChatId(numberPhoneContact)) {
      addMessageToList(messageClass.received, textMessage);
      dispatch(dropMessageAction({ idInstance, apiTokenInstance, receiptId }));
    }
  };

  const getMyChatId = (number) => `${number}@c.us`;
  const getTextOfInput = (ref) => ref.current.value;
  const clearInput = (ref) => {
    ref.current.value = '';
    ref.current.focus();
  };

  const hendleSubmit = (evt) => {
    evt.preventDefault();

    const message = getTextOfInput(inputRef);
    addMessageToList(messageClass.sent, message);
    const myChatId = getMyChatId(numberPhoneContact);
    dispatch(
      sendMessageAction({ idInstance, apiTokenInstance, myChatId, message })
    );
    clearInput(inputRef);
  };

  const addMessageToList = (className, txtMsg) => {
    const messageData = createDataMessage(className, txtMsg);
    newMessagesList.push(messageData);
    dispatch(setMessagesList(newMessagesList));
  };

  return (
    <div className='page page__chat'>
      <main className='chat'>
        <div className='chat__header'>
          <div className='chat__contact'>
            <div className='chat__contact-wrapper'>
              <div className='chat__contact-avatar'>
                <img
                  className='contact__avatar'
                  src='img/avatar.svg'
                  alt='contact-avatar'
                />
              </div>
              <div className='chat__contact-numbet'>
                <p className='chat__numbet'>{`+${numberPhoneContact}`}</p>
              </div>
            </div>
            <div className='chat__exit'>
              <Link to={''} className='chat__exit-link' onClick={handleExit}>
                <img
                  className='chat__exit-img'
                  src='img/exit.svg'
                  alt='chat-exit'
                />
              </Link>
            </div>
          </div>
        </div>
        <div className='chat__container'>
          <MessagesContainer />
        </div>
        <div className='chat__footer'>
          <form className='chat__form' onSubmit={hendleSubmit}>
            <div className='chat__form-wrapper chat__form-wrapper--input'>
              <textarea
                className='chat__input'
                cols='30'
                rows='10'
                autoFocus
                required
                ref={inputRef}
              ></textarea>
            </div>
            <div className='chat__form-wrapper'>
              <button className='chat__submit'>
                <img src='img/submit.svg' alt='submit' />
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
