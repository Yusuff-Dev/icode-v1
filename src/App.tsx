import Footer from "./components/footer/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/navbar/Navbar"
import Services from "./components/Services"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="md:fixed w-full z-50">
        <Navbar />
      </div>
      <main className="grow">
        <Hero/>
        <Services/>
      </main>

      <Footer/>
    </div>
  )
}

export default App
