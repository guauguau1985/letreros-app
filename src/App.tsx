import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListaPage } from './pages/ListaPage';
import { DetallePage } from './pages/DetallePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaPage />} />
        <Route path="/letrero/:id" element={<DetallePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
