import Hero from "../../components/hero/Hero";
import HeroCarousel from "../../components/carousel/HeroCarousel";
import EventVenue from "../../components/vanue/Vanue";
import ContactUs from "../../components/contact/ContactUs";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <Hero />
      <EventVenue />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
