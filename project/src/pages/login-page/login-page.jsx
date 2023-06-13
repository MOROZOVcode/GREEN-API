import './login-page.css';

export default function LoginPage() {
  return (
    <div className='page page__login'>
      <header className='login__header'></header>
      <main className='login'>
        <div className='login__container'>
          <div className='login__wrapper'>
            <div className='login__title'>
              <h1 className='title__text'>Авторизация</h1>
            </div>
            <form className='login__form'>
              <div className='login__input'>
                <div className='login__input-wrapper'>
                  <label htmlFor='IdInstance'> IdInstance </label>
                  <input
                    id='IdInstance'
                    type='text'
                    name='IdInstance'
                    required
                    placeholder='gd56Y3GJSGT'
                  />
                </div>
                <div className='login__input-wrapper'>
                  <label htmlFor='ApiTokenInstance'> ApiTokenInstance </label>
                  <input
                    id='ApiTokenInstance'
                    type='text'
                    name='ApiTokenInstance'
                    required
                    placeholder='gd56Y3GJSGT'
                  />
                </div>
              </div>
              <div className='login__title'>
                <h1 className='title__text'>Написать пользователю</h1>
              </div>
              <div className='login__input'>
                <div className='login__input-wrapper'>
                  <label htmlFor='IdInstance'> Номер телефона </label>
                  <input
                    id='IdInstance'
                    type='number'
                    name='IdInstance'
                    required
                    placeholder='+79955836252'
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
