import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/Header/Header";

const Home = () => {
  const { logout } = useAuth();

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <button onClick={logout}>Sair</button>
      <Link to="/schedule">
        <button>Agendamentos</button>
      </Link>
      <Link to="/laboratories">
        <button>Laboratórios</button>
      </Link>
    </div>
  );
};

export default Home;
