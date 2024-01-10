import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <div className="navbar-section">
      <nav className="nav">
        <div className="logo">
          <h3 className="">Liladhar Varma</h3>
        </div>

        <ul className="nav-links">
          <Nav link="#About-container" name="About" />
          <Nav link="#skills-container" name="Skills" />
          <Nav link="#project-container" name="Projects" />
          <Nav link="#social-container" name="Socials" />
        </ul>
      </nav>
    </div>
  );
}

export default Header;
