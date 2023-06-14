import { useAppDispatch } from '../../hooks';
import {
  setApiTokenUser,
  setIdUser,
  setNumberPhoneContact,
} from '../../store/user-data/user-data.slice';
import './login-page.css';
import { useRef } from 'react';

export default function LoginPage() {
  const dispatch = useAppDispatch();

  const idInstanceRef = useRef(null);
  const apiTokenInstanceRef = useRef(null);
  const numberPhoneContactRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(setIdUser(Number(idInstanceRef.current.value)));
    dispatch(setApiTokenUser(apiTokenInstanceRef.current.value));
    dispatch(
      setNumberPhoneContact(Number(numberPhoneContactRef.current.value))
    );
  };

  return (
    <div className='page page__login'>
      <header className='login__header'></header>
      <main className='login'>
        <div className='login__container'>
          <div className='login__wrapper'>
            <div className='login__title'>
              <h1 className='title__text title__text--head'>Авторизация</h1>
            </div>
            <form className='login__form' onSubmit={handleSubmit}>
              <div className='login__input'>
                <div className='login__input-wrapper'>
                  <label htmlFor='IdInstance'> IdInstance </label>
                  <input
                    id='IdInstance'
                    type='text'
                    name='IdInstance'
                    required
                    placeholder='1234567890'
                    ref={idInstanceRef}
                  />
                </div>
                <div className='login__input-wrapper'>
                  <label htmlFor='ApiTokenInstance'> ApiTokenInstance </label>
                  <input
                    id='ApiTokenInstance'
                    type='text'
                    name='ApiTokenInstance'
                    required
                    placeholder='57634gdh5fds36744e2a376f5f8g9h6y3d0v4'
                    ref={apiTokenInstanceRef}
                  />
                </div>
              </div>
              <div className='login__title'>
                <h2 className='title__text'>Написать пользователю</h2>
              </div>
              <div className='login__input'>
                <div className='login__input-wrapper'>
                  <label htmlFor='IdInstance'> Номер телефона </label>
                  <input
                    id='IdInstance'
                    type='number'
                    name='IdInstance'
                    required
                    placeholder='79004443388'
                    ref={numberPhoneContactRef}
                  />
                </div>
                <div className='login__input-wrapper login__input-wrapper--button'>
                  <button className='login__submit' type='submit'>
                    Начать чат
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
