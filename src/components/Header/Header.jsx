import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="headerLogo">
            <img src="/src/assets/logo.png" alt="logoLivro" />
          </div>
          <ul className="links">
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
