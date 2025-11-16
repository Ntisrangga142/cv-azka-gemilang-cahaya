import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "/logo.png";

function getNavLinkClass({ isActive }) {
  const base = "relative py-3 transition-all duration-300 group block";
  const active = "text-blue-600";
  const inactive = "hover:text-blue-500";

  return isActive ? `${base} ${active}` : `${base} ${inactive}`;
}

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Product", path: "/product" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full shadow-md shadow-gray-300 bg-white">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-5 lg:px-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} className="w-20" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 font-semibold text-medium tracking-wide">
          {menuItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={getNavLinkClass}>
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`
                      absolute left-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden flex flex-col px-6 pb-5 gap-3 font-semibold text-medium transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"}
        `}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setOpen(false)}
            className={getNavLinkClass}
          >
            {({ isActive }) => (
              <>
                {item.name}
                <span
                  className={`
                    absolute left-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                ></span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
