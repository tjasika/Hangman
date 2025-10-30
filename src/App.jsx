import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import EndPage from './pages/EndPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/gameover" element={<EndPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App