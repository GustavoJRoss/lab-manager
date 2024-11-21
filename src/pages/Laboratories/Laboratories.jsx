import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import LabCard from '../../components/LabCard/LabCard'; // Importando o componente
import './Laboratories.css';

const Laboratorios = () => {
  // Dados fictícios
  const laboratorios = [
    {
      nome: 'Lab 1',
      bloco: 'A',
      status: 'Disponível',
      numPcs: 20,
      softwares: ['Python', 'Visual Studio Code', 'MATLAB'],
    },
    {
      nome: 'Lab 2',
      bloco: 'B',
      status: 'Ocupado',
      numPcs: 15,
      softwares: ['Eclipse', 'IntelliJ', 'NetBeans'],
    },
    {
      nome: 'Lab 3',
      bloco: 'A',
      status: 'Manutenção',
      numPcs: 10,
      softwares: ['AutoCAD', 'SketchUp', 'Blender'],
    },
    {
      nome: 'Lab 4',
      bloco: 'C',
      status: 'Disponível',
      numPcs: 25,
      softwares: ['Unity', 'Unreal Engine', 'Photoshop'],
    },
  ];

  // Estado do filtro
  const [filtroBloco, setFiltroBloco] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('');
  const [filtroNumPcs, setFiltroNumPcs] = useState('');

  // Estado para controle do modal
  const [laboratorioSelecionado, setLaboratorioSelecionado] = useState(null);

  // Filtrar os dados com base nos filtros
  const laboratoriosFiltrados = laboratorios.filter((lab) => {
    return (
      (filtroBloco === '' || lab.bloco === filtroBloco) &&
      (filtroStatus === '' || lab.status === filtroStatus) &&
      (filtroNumPcs === '' || lab.numPcs >= parseInt(filtroNumPcs))
    );
  });

  return (
    <>
      <Header />
      <div className="laboratoriosContainer">
        {/* Filtro */}
        <div className="filtroContainer">
          <div className="filtroItem">
            <label>Bloco:</label>
            <select
              value={filtroBloco}
              onChange={(e) => setFiltroBloco(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
          <div className="filtroItem">
            <label>Status:</label>
            <select
              value={filtroStatus}
              onChange={(e) => setFiltroStatus(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="Disponível">Disponível</option>
              <option value="Ocupado">Ocupado</option>
              <option value="Manutenção">Manutenção</option>
            </select>
          </div>
          <div className="filtroItem">
            <label>Num. PCs:</label>
            <input
              type="number"
              min="0"
              value={filtroNumPcs}
              onChange={(e) => setFiltroNumPcs(e.target.value)}
              placeholder="Mínimo"
            />
          </div>
        </div>

        {/* Tabela */}
        <div className="tabelaContainer">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Bloco</th>
                <th>Status</th>
                <th>Numero de PCs</th>
              </tr>
            </thead>
            <tbody>
              {laboratoriosFiltrados.map((lab, index) => (
                <tr key={index} onClick={() => setLaboratorioSelecionado(lab)}>
                  <td>{lab.nome}</td>
                  <td>{lab.bloco}</td>
                  <td>{lab.status}</td>
                  <td>{lab.numPcs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Utilizando o componente LabCard */}
      <LabCard
        laboratorio={laboratorioSelecionado}
        onClose={() => setLaboratorioSelecionado(null)} // Fechar modal
      />
    </>
  );
};

export default Laboratorios;
