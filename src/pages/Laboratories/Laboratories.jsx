import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import LabCard from '../../components/LabCard/LabCard'; // Importando o componente
import './Laboratories.css';
import Button from '../../components/Button/Button';
import CreateLab from '../../components/CreateLab/CreateLab';

const Laboratorios = () => {
  // Dados fictícios
  const [labs, setLabs] = useState({});

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/labs');
        if (!response.ok) {
          throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setLabs(data); // Supondo que a API retorne um array de labs
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLabs();
  }, []);

  const laboratorios = [
    {
      Name: 'Lab 1',
      Local: 'A',
      Acessible: true,
      PcNumbers: 20,
      Status: 'disponivel',
      Softwares: ['Python', 'Visual Studio Code', 'MATLAB'],
    },
    {
      Name: 'Lab 2',
      Local: 'A',
      Acessible: true,
      PcNumbers: 20,
      Status: 'disponivel',
      Softwares: ['Python', 'Visual Studio Code', 'MATLAB'],
    },
    {
      Name: 'Lab 3',
      Local: 'A',
      Acessible: true,
      PcNumbers: 20,
      Status: 'disponivel',
      Softwares: ['Python', 'Visual Studio Code', 'MATLAB'],
    },
    {
      Name: 'Lab 3',
      Local: 'A',
      Acessible: true,
      PcNumbers: 20,
      Status: 'disponivel',
      Softwares: ['Python', 'Visual Studio Code', 'MATLAB'],
    },
  ];

  // Estado do filtro
  const [filtroBloco, setFiltroBloco] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('');
  const [filtroNumPcs, setFiltroNumPcs] = useState('');

  // Estado para controle do modal
  const [laboratorioSelecionado, setLaboratorioSelecionado] = useState(null);
  const [createLab, setCreateLab] = useState(false);

  // Filtrar os dados com base nos filtros
  const laboratoriosFiltrados = laboratorios.filter((lab) => {
    return (
      (filtroBloco === '' || lab.Local === filtroBloco) &&
      (filtroStatus === '' || lab.Status === filtroStatus) &&
      (filtroNumPcs === '' || lab.PcNumbers >= parseInt(filtroNumPcs))
    );
  });

  return (
    <>
      <Header />
      <div className="laboratoriosContainer">
        {/* Filtro */}
        <div
          className="manageInfoContainer"
          style={{
            display: 'flex',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 50px',
            borderRadius: '10px',
          }}
        >
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
                <option value="disponivel">Disponível</option>
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
          <Button
            text={'Criar Laboratório'}
            onClick={() => setCreateLab(true)}
            color={'#357ae8'}
          />
        </div>
        <div className="tabelaContainer">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Bloco</th>
                <th>Status</th>
                <th>Numero de PCs</th>
                <th>Acessível</th>
              </tr>
            </thead>
            <tbody>
              {labs.map((lab, index) => (
                <tr key={index} onClick={() => setLaboratorioSelecionado(lab)}>
                  <td>{lab.name}</td>
                  <td>{lab.local}</td>
                  <td>{lab.status}</td>
                  <td>{lab.pcNumber}</td>
                  <td>{lab.acessible ? 'Sim' : 'Não'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <LabCard
        laboratorio={laboratorioSelecionado}
        onClose={() => setLaboratorioSelecionado(null)} // Fechar modal
      />
      {createLab && <CreateLab onClose={() => setCreateLab(false)} />}
    </>
  );
};

export default Laboratorios;
