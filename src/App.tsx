import { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out",});
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="md:fixed w-full z-50">
        <Navbar />
      </div>
      <main className="grow ">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
