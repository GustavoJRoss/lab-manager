import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="homeCards">
        <Card
          title={"Agenda"}
          imagePath={"/src/assets/react.svg"}
          description={
            "Este é o lugar que você poderá agendar o laborátorio no melhor horário pra você."
          }
          onClick={() => {
            navigate("/schedule");
          }}
        />
        <Card
          title={"Laboratórios"}
          imagePath={"/src/assets/react.svg"}
          description={
            "Este é o lugar que você poderá ver os laboratórios disponiveis para você."
          }
          onClick={() => {
            navigate("/laboratories");
          }}
        />
      </div>
    </div>
  );
};

export default Home;
