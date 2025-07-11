import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import RandomJoke from './pages/RandomJoke';
import SearchJokes from './pages/SearchJokes';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav style={{ display: 'flex', gap: '1rem', marginBottom: '20px' }}>
          <div className="navbar">
            <NavLink to="/" end className="nav-link">
              Random Joke
            </NavLink>
            <NavLink to="/search" className="nav-link">
              Search Joke
            </NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<RandomJoke />} />
          <Route path="/search" element={<SearchJokes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
