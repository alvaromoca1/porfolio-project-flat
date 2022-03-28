import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import{Home,Projects} from './pages';
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" caseSensitive={false} element={<Home />}/>
          <Route path="/project" caseSensitive={false} element={<Projects />}/>
      </Routes>
    </Router>
  );
}

export default App;
