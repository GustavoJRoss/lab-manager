import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/Header/Header";
import "./Login.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { login } = useAuth();

  return (
    <div>
      <Header />
      <div className="loginPage">
        <div className="loginBox">
          <form>
            <h1>Login</h1>
            <div className="formInfo">
              <div className="labelInput">
                <label htmlFor="Usuário">Usuário</label>
                <input
                  type="text"
                  placeholder="Usuário"
                  className="loginInput"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="labelInput">
                <label htmlFor="Senha">Senha</label>
                <input
                  type="password"
                  placeholder="Senha"
                  className="loginInput"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="button"
              className="loginButton"
              onClick={() => login(username, password)}
            >
              Login
            </button>
            <p className="loginFooter">
              Ainda não possui uma conta? <a href="#">Clique aqui.</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
