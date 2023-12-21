import { Route, Routes } from "react-router-dom";
import MainPage from "./main/MainPage";
import Constructiestaal from "./materials/Constructiestaal";
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
