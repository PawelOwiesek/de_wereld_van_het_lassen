import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Materials from "./Materials";
import Navbar from "./navigation/NavBar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/materials" element={<Materials />} />
      </Routes>
    </div>
  );
}

export default App;
