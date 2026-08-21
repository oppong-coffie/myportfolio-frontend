import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import MainLayout from "./components/MainLayout";
import AllProjects from "./components/AllProjects";
import ScrollToTop from "./components/ScrollToTop";
import OngoingProjects from "./components/OngoingProjects";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
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
