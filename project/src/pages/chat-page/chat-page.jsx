import { Link, useNavigate } from 'react-router-dom';
import './chat-page.css';
import { AppRoute } from '../../const';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getApiTokenInstance,
  getIdInstance,
  getNumberPhoneContact,
} from '../../store/user-data/user-data.selectors';
import { fetchMessageAction } from '../../store/api-action';

export default function ChatPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleExit = (evt) => {
    evt.preventDefault();
    navigate(AppRoute.login);
  };

  const idInstance = useAppSelector(getIdInstance);
  const apiTokenInstance = useAppSelector(getApiTokenInstance);
  const numberPhoneContact = useAppSelector(getNumberPhoneContact);

  useEffect(() => {
    dispatch(fetchMessageAction({ idInstance, apiTokenInstance }));
  }, [dispatch, idInstance, apiTokenInstance]);

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
          <div className='chat__wrapper'>
            <div className='chat__wrapper-message received'>
              <div className='chat__message received'>Чо ты как там?</div>
            </div>
            <div className='chat__wrapper-message sent'>
              <div className='chat__message sent'>
                Lorem ipsum dolor
                hjfhjdhfkdhfkjdhjfhsdfhsdifhdjfhjsdhfkjshfhdsfhsdfhsuidfhs sit
                amet consectetur. Ut sit volutpat ultricies mi in. Odio sed
                adipiscing in fames hac a
              </div>
            </div>
          </div>
        </div>
        <div className='chat__footer'>
          <form className='chat__form' action=''>
            <div className='chat__form-wrapper chat__form-wrapper--input'>
              <textarea
                className='chat__input'
                cols='30'
                rows='10'
                autoFocus
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
