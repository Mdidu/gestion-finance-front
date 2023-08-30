import { useState } from "react";
import "./navbar.component.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <section className="top-nav">
      <div>
        <Link to={"/"} onClick={closeNavbar}>
          Accueil
        </Link>
      </div>
      <label className="menu-button-container" onClick={toggleNavbar}>
        <div className="menu-button"></div>
      </label>
      <ul className={`menu ${isOpen ? "active" : ""}`}>
        <li>
          <Link to={"/portfolio/1"} onClick={toggleNavbar}>
            Visualiser portefeuille
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
