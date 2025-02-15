import HeroCarousel from "./components/carousel/HeroCarousel";
import ContactUs from "./components/contact/ContactUs";
import Footer from "./components/footer/Footer";
// import Hero from "./components/hero/Hero";
import Navbar from "./components/navabar/Navbar";
import EventVenue from "./components/vanue/Vanue";

export default function Home() {
  return (
    <div className="w-full font-Inter">
      <Navbar />
      <HeroCarousel />
      {/* <Hero /> */}
      <EventVenue />
      <ContactUs />
      <Footer />
    </div>
  );
}
