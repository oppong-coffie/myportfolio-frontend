import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './components/MainLayout';
import AllProjects from './components/AllProjects';

import OngoingProjects from './components/OngoingProjects';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/ongoing-projects" element={<OngoingProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
