import { useAppSelector } from '../../hooks';
import { getMessagesList } from '../../store/chat-data/chat-data.selectors';

export default function MessagesContainer() {
  const messagesList = useAppSelector(getMessagesList);
  const reverseMessagesList = [...messagesList].reverse();

  return (
    <div className='chat__wrapper'>
      {reverseMessagesList.map((item) => (
        <div
          key={reverseMessagesList.indexOf(item)}
          className={`chat__wrapper-message ${item.className}`}
        >
          <div className={`chat__message ${item.className}`}>
            {item.textMessage}
          </div>
        </div>
      ))}
    </div>
  );
}
