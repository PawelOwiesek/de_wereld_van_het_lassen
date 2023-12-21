import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import Constructiestaal from "./pages/materials/Constructiestaal";
import Navbar from "./navigation/NavBar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/constructiestaal" element={<Constructiestaal />} />
      </Routes>
    </div>
  );
}

export default App;
