import './chat-page.css';

export default function ChatPage() {
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
                <p className='chat__numbet'>+79955836252</p>
              </div>
            </div>
            <div className='chat__exit'>
              <a href='/' className='chat__exit-link'>
                <img
                  className='contact__avatar'
                  src='img/exit.svg'
                  alt='contact-avatar'
                />
              </a>
            </div>
          </div>
        </div>
        <div className='chat__container'>
          <div className='chat__wrapper'>
            <div className='chat__wrapper-mesage received'>
              <div className='chat__mesage received'>Чо ты как там?</div>
            </div>
            <div className='chat__wrapper-mesage sent'>
              <div className='chat__mesage sent'>
                Lorem ipsum dolor
                hjfhjdhfkdhfkjdhjfhsdfhsdifhdjfhjsdhfkjshfhdsfhsdfhsuidfhs sit
                amet consectetur. Ut sit volutpat ultricies mi in. Odio sed
                adipiscing in fames hac a
              </div>
            </div>
            <div className='chat__wrapper-mesage received'>
              <div className='chat__mesage received'>
                Lorem ipsum dolor sit amet consectetur. Ut sit volutpat
                ultricies mi in. Odio sed adipiscing in fames hac a Lorem ipsum
                dolor sit amet consectetur. Ut sit volutpat ultricies mi in.
                Odio sed adipiscing in fames hac a
              </div>
            </div>
            <div className='chat__wrapper-mesage sent'>
              <div className='chat__mesage sent'>
                Lorem ipsum dolor sit amet consectetur. Ut sit volutpat
                ultricies mi in. Odio sed adipiscing in fames hac a
              </div>
            </div>
            <div className='chat__wrapper-mesage received'>
              <div className='chat__mesage received'>
                Lorem ipsum dolor sit amet consectetur. Ut sit volutpat
                ultricies mi in. Odio sed adipiscing in fames hac a Lorem ipsum
                dolor sit amet consectetur. Ut sit volutpat ultricies mi in.
                Odio sed adipiscing in fames hac a
              </div>
            </div>
            <div className='chat__wrapper-mesage sent'>
              <div className='chat__mesage sent'>
                Lorem ipsum dolor sit amet consectetur. Ut sit volutpat
                ultricies mi in. Odio sed adipiscing in fames hac a
              </div>
            </div>
            <div className='chat__wrapper-mesage received'>
              <div className='chat__mesage received'>
                Lorem ipsum dolor sit amet consectetur. Ut sit volutpat
                ultricies mi in. Odio sed adipiscing in fames hac a Lorem ipsum
                dolor sit amet consectetur. Ut sit volutpat ultricies mi in.
                Odio sed adipiscing in fames hac a
              </div>
            </div>
            <div className='chat__wrapper-mesage sent'>
              <div className='chat__mesage sent'>
                Lorem ipsum dolor sit amet consectetur. Ut sit volutpat
                ultricies mi in. Odio sed adipiscing in fames hac a
              </div>
            </div>
            <div className='chat__wrapper-mesage received'>
              <div className='chat__mesage received'>Привет)</div>
            </div>
            <div className='chat__wrapper-mesage received'>
              <div className='chat__mesage received'>
                Lorem ipsum dolor sit amet consectetur. Ut sit volutpat
                ultricies mi in. Odio sed adipiscing in fames hac a
              </div>
            </div>
            <div className='chat__wrapper-mesage received'>
              <div className='chat__mesage received'>Чо ты как там?</div>
            </div>
            <div className='chat__wrapper-mesage sent'>
              <div className='chat__mesage sent'>Да норм вроде. спс</div>
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
                autofocus
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
