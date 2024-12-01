import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
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
              <img
                src="/src/assets/logo.png"
                alt="logoLivro"
                onClick={() => alert("rerer")}
              />
            </div>
            <ul className="links">
              <li>
                <a
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register
                </a>
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
