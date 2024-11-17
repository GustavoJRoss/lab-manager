import React, { useState } from "react";
import "./Header.css";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {!isAuthenticated ? (
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
      ) : (
        <header>
          <div className="headerContainer">
            <div className="headerLogo">
              <img src="/src/assets/logo.png" alt="logoLivro" />
            </div>
            <div className="userContent" onClick={toggleMenu}>
              <span>NomeDoUsuario</span>
              <div className="userImage">
                <img src="/src/assets/userImage.png" alt="UserImage" />
              </div>
              {/* Menu suspenso */}
              {isMenuOpen && (
                <div className="dropdownMenu">
                  <ul>
                    <li>
                      <a href="#">Perfil</a>
                    </li>
                    <li>
                      <button onClick={logout}>Deslogar</button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
