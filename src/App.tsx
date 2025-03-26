import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Committee from "./pages/committee/Committee";
import Navbar from "./components/navabar/Navbar";
import PublicationEthics from "./pages/publication-ethics/PublicationEthics";

export default function App() {
  return (
    <div className="w-full font-Inter bg-white">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/publication-ethics" element={<PublicationEthics />} />
        </Routes>
      </Router>
    </div>
  );
}
