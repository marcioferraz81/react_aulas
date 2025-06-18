import { useState } from 'react';
import './Cep.css';

export default function Cep() {
  const [cep, setCep] = useState('');
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState('');

  const buscarCep = async () => {
    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const json = await resposta.json();
      if (json.erro) {
        setErro('CEP não encontrado');
        setDados(null);
      } else {
        setDados(json);
        setErro('');
      }
    } catch {
      setErro('Erro na consulta');
      setDados(null);
    }
  };

  return (
    <div className="cep-container">
      <h2>Consulta de CEP</h2>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={buscarCep}>Buscar</button>

      {erro && <p className="erro">{erro}</p>}

      {dados && (
        <div className="resultado">
          <p><strong>Endereço:</strong> {dados.logradouro}</p>
          <p><strong>Bairro:</strong> {dados.bairro}</p>
          <p><strong>Cidade:</strong> {dados.localidade}</p>
          <p><strong>UF:</strong> {dados.uf}</p>
        </div>
      )}
    </div>
  );
}
