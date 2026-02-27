import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Or just use a tags if not using react-router
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="sm:px-16 px-6 w-full flex items-center py-4 fixed top-0 z-[9999]"
      style={{
        backgroundColor: "#0a0a0a",
        borderBottom: "1px solid rgba(100, 108, 255, 0.25)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.6)",
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#home"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center font-bold text-white text-xl">
            A
          </div>
          <p className="text-white text-[17px] font-bold cursor-pointer">
            Aditya Bhawsar
          </p>
        </a>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-neon" : "text-text-main"
                } hover:text-primary text-[16px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="cursor-pointer text-white"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <X size={28} /> : <Menu size={28} />}
          </div>

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 glassmorphism absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-neon" : "text-text-main"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
