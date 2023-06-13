import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login-page/login-page';
import ChatPage from '../pages/chat-page/chat-page';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='/chat' element={<ChatPage />} />
      </Routes>
    </Router>
  );
}
