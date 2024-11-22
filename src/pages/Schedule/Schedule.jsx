import React, { useState } from "react";
import "./Schedule.css";
import Header from "../../components/Header/Header";

const Schedule = () => {
  const [laboratorioSelecionado, setLaboratorioSelecionado] = useState(null);
  const [dataAgendamento, setDataAgendamento] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFim, setHoraFim] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  const laboratorios = [
    {
      nome: "Lab 1",
      bloco: "A",
      status: "Disponível",
      numPcs: 20,
      softwares: ["Python", "Visual Studio Code", "MATLAB"],
    },
    {
      nome: "Lab 2",
      bloco: "B",
      status: "Ocupado",
      numPcs: 15,
      softwares: ["Eclipse", "IntelliJ", "NetBeans"],
    },
    {
      nome: "Lab 3",
      bloco: "A",
      status: "Manutenção",
      numPcs: 10,
      softwares: ["AutoCAD", "SketchUp", "Blender"],
    },
    {
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
    setMostrarModal(false);
  };

  // Função para confirmar o agendamento
  const confirmarAgendamento = () => {
    if (!dataAgendamento || !horaInicio || !horaFim) {
      alert("Preencha todos os campos!");
      return;
    }
    alert(
      `Laboratório ${laboratorioSelecionado.nome} agendado com sucesso para ${dataAgendamento}, das ${horaInicio} às ${horaFim}!`
    );
    fecharModal();
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
