import React, { useState } from "react";
import "./Schedule.css";
import axios from "axios";
import Header from "../../components/Header/Header";

const Schedule = () => {
  const [laboratorioSelecionado, setLaboratorioSelecionado] = useState(null);
  const [dataAgendamento, setDataAgendamento] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFim, setHoraFim] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [userID, setUserID] = useState("");
  const [periodo, setPeriodo] = useState("manha");
  const [diasSelecionados, setDiasSelecionados] = useState([]);

  const criarAgendamento = async ({
    labID,
    userID,
    startTime,
    endTime,
    period,
    daysOfWeek,
  }) => {
    try {
      // Convertendo os IDs e datas para o formato esperado
      const payload = {
        lab_id: labID, // Assuma que já é um ObjectID no formato correto
        user_id: userID, // Assuma que já é um ObjectID no formato correto
        start_time: new Date(startTime).toISOString(),
        end_time: new Date(endTime).toISOString(),
        period: period || null,
        days_of_week: daysOfWeek.length ? daysOfWeek : null,
      };

      // Fazendo a requisição POST para a rota
      const response = await axios.post("/bookings/create", payload);

      // Retornando sucesso ou mensagem do servidor
      console.log("Agendamento criado com sucesso:", response.data);
      alert("Agendamento criado com sucesso!");
    } catch (error) {
      console.error(
        "Erro ao criar agendamento:",
        error.response?.data || error
      );
      alert("Erro ao criar agendamento. Verifique os dados e tente novamente.");
    }
  };

  const laboratorios = [
    {
      id: 1,
      nome: "Lab 1",
      bloco: "A",
      status: "Disponível",
      numPcs: 20,
      softwares: ["Python", "Visual Studio Code", "MATLAB"],
    },
    {
      id: 2,
      nome: "Lab 2",
      bloco: "B",
      status: "Ocupado",
      numPcs: 15,
      softwares: ["Eclipse", "IntelliJ", "NetBeans"],
    },
    {
      id: 3,
      nome: "Lab 3",
      bloco: "A",
      status: "Manutenção",
      numPcs: 10,
      softwares: ["AutoCAD", "SketchUp", "Blender"],
    },
    {
      id: 4,
      nome: "Lab 4",
      bloco: "C",
      status: "Disponível",
      numPcs: 25,
      softwares: ["Unity", "Unreal Engine", "Photoshop"],
    },
  ];

  // Função para abrir o modal com os dados do laboratório selecionado
  const abrirAgendamento = (lab) => {
    setLaboratorioSelecionado(lab);
    setMostrarModal(true);
  };

  // Função para fechar o modal
  const fecharModal = () => {
    setLaboratorioSelecionado(null);
    setDataAgendamento("");
    setHoraInicio("");
    setHoraFim("");
    setUserID("");
    setPeriodo("manha");
    setDiasSelecionados([]);
    setMostrarModal(false);
  };

  // Função para confirmar o agendamento
  const confirmarAgendamento = async () => {
    if (!dataAgendamento || !horaInicio || !horaFim || !userID) {
      alert("Preencha todos os campos!");
      return;
    }

    const agendamento = {
      labID: laboratorioSelecionado.id, // Substitua por ID correto do laboratório
      userID,
      startTime: `${dataAgendamento}T${horaInicio}`,
      endTime: `${dataAgendamento}T${horaFim}`,
      period: periodo,
      daysOfWeek: diasSelecionados,
    };

    try {
      await criarAgendamento(agendamento);
      fecharModal(); // Fechar modal após sucesso
    } catch (error) {
      console.error("Erro ao criar agendamento:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="schedule">
        <h1>Agendar Laboratório</h1>
        <table className="labTable">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Bloco</th>
              <th>Status</th>
              <th>Número de PCs</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {laboratorios.map((lab) => (
              <tr key={lab.id}>
                <td>{lab.nome}</td>
                <td>{lab.bloco}</td>
                <td>{lab.status}</td>
                <td>{lab.numPcs}</td>
                <td>
                  <button
                    className="agendarButton"
                    onClick={() => abrirAgendamento(lab)}
                    disabled={lab.status !== "Disponível"}
                  >
                    Agendar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal para agendamento */}
        {mostrarModal && (
          <div className="modal">
            <div className="modalContent">
              <h2>Agendar Laboratório</h2>
              <p>
                <strong>Laboratório:</strong> {laboratorioSelecionado.nome}
              </p>
              <label>
                Usuário:
                <input
                  type="text"
                  placeholder="ID do Usuário"
                  value={userID}
                  onChange={(e) => setUserID(e.target.value)}
                />
              </label>
              <label>
                Data:
                <input
                  type="date"
                  value={dataAgendamento}
                  onChange={(e) => setDataAgendamento(e.target.value)}
                />
              </label>
              <label>
                Hora de Início:
                <input
                  type="time"
                  value={horaInicio}
                  onChange={(e) => setHoraInicio(e.target.value)}
                />
              </label>
              <label>
                Hora de Término:
                <input
                  type="time"
                  value={horaFim}
                  onChange={(e) => setHoraFim(e.target.value)}
                />
              </label>
              <label>
                Período:
                <select
                  value={periodo}
                  onChange={(e) => setPeriodo(e.target.value)}
                >
                  <option value="manha">Manhã</option>
                  <option value="tarde">Tarde</option>
                  <option value="noite">Noite</option>
                </select>
              </label>
              <label>
                Dias da Semana:
                <div className="diasSemana">
                  {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map(
                    (dia, index) => (
                      <label key={index}>
                        <input
                          type="checkbox"
                          value={index}
                          checked={diasSelecionados.includes(index)}
                          onChange={(e) => {
                            const value = Number(e.target.value);
                            if (diasSelecionados.includes(value)) {
                              setDiasSelecionados(
                                diasSelecionados.filter((d) => d !== value)
                              );
                            } else {
                              setDiasSelecionados([...diasSelecionados, value]);
                            }
                          }}
                        />
                        {dia}
                      </label>
                    )
                  )}
                </div>
              </label>
              <div className="modalButtons">
                <button
                  className="confirmButton"
                  onClick={confirmarAgendamento}
                >
                  Confirmar
                </button>
                <button className="cancelButton" onClick={fecharModal}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Schedule;
