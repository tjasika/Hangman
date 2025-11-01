import { HashRouter, Routes, Route } from 'react-router-dom';import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import EndPage from './pages/EndPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/gameover" element={<EndPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App