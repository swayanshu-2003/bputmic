import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Committee from "./pages/committee/Committee";
import Navbar from "./components/navabar/Navbar";

export default function App() {
  return (
    <div className="w-full font-Inter bg-white">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/committee" element={<Committee />} />
        </Routes>
      </Router>
    </div>
  );
}
