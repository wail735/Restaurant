import HeroSection from "./Header/HeroSection";
import Discover from "./Discover/Discover";
import Offered from "./Offered/Offered";
import About from "./About/About";
import Section from "./Section/Section";
import Service from "./Services/Service";
import Aboutt from "./About/Aboutt";
import Blog from "./Blog/Blog";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Discover />
      <Offered/>
      <About/>
      <Section/>
      <Service/>
      <Aboutt/>
      <Blog/>
    </div>
  );
}
