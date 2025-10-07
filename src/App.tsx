import Blog from "./components/Blog"
import Clients from "./components/Clients"
import Contact from "./components/Contact"
import Footer from "./components/footer/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="md:fixed w-full z-50">
        <Navbar />
      </div>
      <main className="grow">
        <Hero/>
        <Services/>
        <Projects/>
        <Clients/>
        <Testimonials/>
        <Blog/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
