import Hero from "../Hero";
import Services from "../Services";
import Projects from "../Projects";
import Clients from "../Clients";
import Testimonials from "../Testimonials";
import Blog from "../Blog";
import Contact from "../Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Clients />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
}
