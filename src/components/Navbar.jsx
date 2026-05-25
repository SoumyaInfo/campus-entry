import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Workday HCM", path: "/workday-hcm" },
    { name: "Workday Finance", path: "/workday-finance" },
  ];

  const handleContact = () => {
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
    <nav className="bg-[#355E3B] border-b border-[#DDE7D8] px-8 h-16 flex items-center justify-between sticky top-0 z-50 shadow-sm">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-xl p-1 flex items-center justify-center overflow-hidden shadow-sm">
          <img
            src={logo}
            alt="Campus Entry"
            className="object-contain w-full h-full"
          />
        </div>

        <span className="text-white text-base font-semibold tracking-wide">
          Campus <span className="text-[#C7D92F]">Entry</span> Training Services
        </span>
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-1">
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

        {/* Contact Button */}
       <button
  onClick={handleContact}
  className={`text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-200 text-[#EAF3E5] border-transparent hover:text-white hover:bg-white/10`}
>
  Contact
</button>
      </div>
    </nav>
  );
};

export default Navbar;