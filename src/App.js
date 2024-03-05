
import './App.css';
import {BrowserRouter as Router,Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home'
import Reservations from './pages/Reservations';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Reservations" exact element={<Reservations />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
