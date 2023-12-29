import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/main";
import Constructiestaal from "./pages/materiaals";
import Navbar from "./navigation";
import { BrowserRouter as Router } from "react-router-dom";
import Lassen from "./pages/lassen";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mig" element={<Lassen />} />
        <Route path="/constructiestaal" element={<Constructiestaal />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
