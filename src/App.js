import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MainPage from "./MainPage";
import Materials from "./Materials";

function App() {
  return (
    <div>
      <h1>De wereld van het lassen</h1>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/materials" element={<Materials />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
