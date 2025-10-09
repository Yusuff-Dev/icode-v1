import { useEffect, useState } from "react";
import Bars from "./Bars";
import Links from "./Links";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`py-[42px] fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 shadow-md"
          : "bg-transparent shadow-none"
      }`}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[100px]">
            <Logo>A</Logo>
            <div className="hidden sm:block">
              <Links />
            </div>
          </div>
          <Bars />
        </div>
      </div>
    </nav>
  );
}
