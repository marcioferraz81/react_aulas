import { useState } from 'react';
import './ConsultaDB.css';

export default function ConsultaDB() {
  const [busca, setBusca] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [erro, setErro] = useState('');

  const buscar = async () => {
    try {
      const resp = await fetch(`https://react-aulas-backend.onrender.com/api/usuarios?nome=${busca}`);
      const data = await resp.json();
      if (Array.isArray(data)) {
        setUsuarios(data);
        setErro('');
      } else {
        setErro('Nenhum dado encontrado.');
        setUsuarios([]);
      }
    } catch {
      setErro('Erro ao buscar dados.');
      setUsuarios([]);
    }
  };

  return (
    <div className="consulta-container">
      <h2>Consulta no MySQL</h2>
      <input
        type="text"
        placeholder="Buscar por nome"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <button onClick={buscar}>Buscar</button>

      {erro && <p className="erro">{erro}</p>}

      {usuarios.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.nome}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
