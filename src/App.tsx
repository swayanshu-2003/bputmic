import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Committee from "./pages/committee/Committee";
import Navbar from "./components/navabar/Navbar";
import PublicationEthics from "./pages/publication-ethics/PublicationEthics";
import Registration from "./pages/registration/Registration";
import Schedule from "./pages/schedule/Schedule";
import Speakers from "./pages/speaker/Speaker";
import PaperSubmission from "./pages/paper-submission/PaperSubmission";
import Footer from "./components/footer/Footer";
import AutherGuidelines from "./pages/auther-guidelines/AutherGuidelines";
import SessionAndTracks from "./pages/session_tracks/SessionAndTracks";
// import WhatsAppOverlay from "./components/overlays/WhatsappOverlay";
import About from "./pages/about/About";
import Objectives from "./pages/about/Objectives";
import WhyToAttend from "./pages/about/WhyToAttend";
import Scope from "./pages/about/Scope";
import TPC from "./pages/committee/TPC";
import TrackChair from "./pages/committee/TrackChair";

export default function App() {
  return (
    <div className="w-full font-Inter bg-white overflow-x-hidden">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-to-attend" element={<WhyToAttend />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/tpc" element={<TPC />} />
          <Route path="/track-chair" element={<TrackChair />} />
          <Route path="/auther-guidelines" element={<AutherGuidelines />} />
          <Route path="/publication-ethics" element={<PublicationEthics />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/paper-submission" element={<PaperSubmission />} />
          <Route path="/session-tracks" element={<SessionAndTracks />} />
        </Routes>
      </Router>
      <Footer />
      {/* <WhatsAppOverlay /> */}
    </div>
  );
}
