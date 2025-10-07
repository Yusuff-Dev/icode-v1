import Bars from "./Bars";
import Links from "./Links";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="mt-[42px] py-2">
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
  )
}
