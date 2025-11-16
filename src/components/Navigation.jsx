import { NavLink } from "react-router";
import logo from "/logo.png";

function getNavLinkClass({ isActive }) {
  // Base styling
  const base =
    "relative py-5 transition-all duration-300 group";

  // Active state (tanpa hover)
  const active =
    "text-blue-600";

  // Inactive state (dengan hover)
  const inactive =
    "hover:text-blue-500";

  return isActive ? `${base} ${active}` : `${base} ${inactive}`;
}

function Navigation() {
  return (
    <nav className="flex items-center justify-between shadow-md shadow-gray-300 py-5 px-10 bg-white">
      {/* Logo Section */}
      <div className="w-full flex flex-row items-center gap-5">
        <img src={logo} className="w-25" alt="Logo" />
      </div>

      {/* Navbar Links */}
      <div className="flex gap-10 font-semibold text-medium text-nowrap tracking-wide">
        <NavLink to="/" className={getNavLinkClass}>
          {({ isActive }) => (
            <>
              Home
              <span
                className={`
                  absolute left-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
              ></span>
            </>
          )}
        </NavLink>

        <NavLink to="/about" className={getNavLinkClass}>
          {({ isActive }) => (
            <>
              About Me
              <span
                className={`
                  absolute left-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
              ></span>
            </>
          )}
        </NavLink>

        <NavLink to="/product" className={getNavLinkClass}>
          {({ isActive }) => (
            <>
              Product
              <span
                className={`
                  absolute left-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
              ></span>
            </>
          )}
        </NavLink>

        <NavLink to="/contact" className={getNavLinkClass}>
          {({ isActive }) => (
            <>
              Contact
              <span
                className={`
                  absolute left-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
              ></span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
