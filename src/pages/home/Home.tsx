import Hero from "../../components/hero/Hero";
import HeroCarousel from "../../components/carousel/HeroCarousel";
import EventVenue from "../../components/vanue/Vanue";
import ContactUs from "../../components/contact/ContactUs";
import Timelines from "@/components/hero/Timelines";


const Home = () => {
  return (
    <>
      <HeroCarousel />
      <Hero />
      <Timelines />
      <EventVenue />
      <ContactUs />
      
    </>
  );
};

export default Home;
