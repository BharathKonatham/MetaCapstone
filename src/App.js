
import './App.css';
import {BrowserRouter as Router,Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Reservations from './pages/Reservations';
import NewReservation from './pages/NewReservation';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Reservations" exact element={<Reservations />} />
        <Route path="/NewReservation" exact element={<NewReservation />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
