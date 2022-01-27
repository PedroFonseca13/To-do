import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewList from './pages/NewList';
import Lists from './pages/Lists';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new-list" element={<NewList />} />
        <Route exact path="/lists" element={<Lists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
