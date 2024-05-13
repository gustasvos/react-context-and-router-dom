import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound';
import Navbar from './Navbar';
import Profile from './pages/Profile';

export const AppContext = createContext()

function App() {
  const [username, setUsername] = useState("Gustavo")

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          {/* things inside this component will maintain in every route, its ideal to make a navbar */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <div> Footer </div>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
