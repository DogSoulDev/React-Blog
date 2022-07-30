import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';


function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/createpost" element={<CreatePost />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  </Router>
  );
}

export default App;
