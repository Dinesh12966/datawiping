import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Devices", path: "/devices" },
    { name: "About", path: "/about" }
  ];

  return (
    <nav className="navbar">
      <h1 className="logo">SecureWipe AI</h1>
      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
