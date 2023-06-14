export default function MessageItem({ textMessage, className }) {
  return (
    <div className={`chat__wrapper-message ${className}`}>
      <div className={`chat__message ${className}`}>{textMessage}</div>
    </div>
  );
}
