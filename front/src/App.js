import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import LostPassword from './pages/LostPassword'

export default function App() {
  return (
    <Router>
      <div>

        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/lost-password" element={<LostPassword />} />
        </Routes>
      </div>
    </Router>
  );
}