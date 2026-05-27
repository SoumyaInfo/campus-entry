import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Workday HCM", path: "/workday-hcm" },
    { name: "Workday Finance", path: "/workday-finance" },
  ];

  const handleContact = () => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-[#355E3B] border-b border-[#DDE7D8] sticky top-0 z-50 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <div className="w-10 h-10 bg-white rounded-xl p-1 flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0">
            <img
              src={logo}
              alt="Campus Entry"
              className="object-contain w-full h-full"
            />
          </div>

          <span className="text-white text-sm sm:text-base font-semibold tracking-wide leading-tight">
            Campus{" "}
            <span className="text-[#C7D92F]">Entry</span>
            <span className="hidden sm:inline">
              {" "}
              Training Services
            </span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-200
              ${
                location.pathname === link.path
                  ? "text-[#355E3B] bg-[#C7D92F] border-[#C7D92F]"
                  : "text-[#EAF3E5] border-transparent hover:text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={handleContact}
            className="text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-200 text-[#EAF3E5] border-transparent hover:text-white hover:bg-white/10"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#355E3B] border-t border-white/10 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-3 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium px-4 py-3 rounded-lg transition-all
              ${
                location.pathname === link.path
                  ? "text-[#355E3B] bg-[#C7D92F]"
                  : "text-[#EAF3E5] hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={handleContact}
            className="text-left text-sm font-medium px-4 py-3 rounded-lg text-[#EAF3E5] hover:bg-white/10"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;