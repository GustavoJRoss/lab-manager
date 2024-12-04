import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Header from '../../components/Header/Header';
import './Register.css';

const Register = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleCreateUser = async () => {
    const url = 'http://localhost:8080/users/create';
    const userData = {
      name: username,
      user_type: 1, // Tipo fixo
      password: password,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Usuário criado com sucesso:', result);
        alert('Usuário criado com sucesso!');
      } else {
        console.error('Erro ao criar usuário:', response.statusText);
        alert('Erro ao criar usuário.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro na requisição.');
    }
  };
  return (
    <div>
      <Header />
      <div className="RegisterPage">
        <div className="RegisterBox">
          <form>
            <h1>Register</h1>
            <div className="formInfo">
              <div className="labelInput">
                <label htmlFor="Usuário">Coloque um nome de Usuário:</label>
                <input
                  type="text"
                  placeholder="Usuário"
                  className="RegisterInput"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="labelInput">
                <label htmlFor="Senha">Insira uma senha:</label>
                <input
                  type="password"
                  placeholder="Senha"
                  className="RegisterInput"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="button"
              className="RegisterButton"
              onClick={() => handleCreateUser()}
            >
              Register
            </button>
            <p className="RegisterFooter">
              Já possui uma conta?{' '}
              <a
                onClick={() => {
                  navigate('/');
                }}
              >
                Clique aqui.
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
