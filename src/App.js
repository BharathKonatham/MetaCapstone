
import './App.css';
import {BrowserRouter as Router,Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
