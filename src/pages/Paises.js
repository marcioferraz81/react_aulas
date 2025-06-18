import { useState } from 'react';
import './Paises.css';

export default function Paises() {
  const [nomePais, setNomePais] = useState('');
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState('');

  const buscarPais = async () => {
    try {
      const resp = await fetch(`https://restcountries.com/v3.1/name/${nomePais}`);
      const resultado = await resp.json();

      if (!Array.isArray(resultado) || resultado.status === 404) {
        setErro('País não encontrado');
        setDados(null);
      } else {
        setDados(resultado[0]); // pegar o primeiro resultado
        setErro('');
      }
    } catch {
      setErro('Erro ao buscar o país');
      setDados(null);
    }
  };

  return (
    <div className="paises-container">
      <h2>Buscar País</h2>
      <input
        type="text"
        placeholder="Digite o nome do país"
        value={nomePais}
        onChange={(e) => setNomePais(e.target.value)}
      />
      <button onClick={buscarPais}>Buscar</button>

      {erro && <p className="erro">{erro}</p>}

      {dados && (
        <div className="pais-detalhes">
          <h3>{dados.name.common}</h3>
          <img src={dados.flags.svg} alt={dados.name.common} width={100} />
          <p><strong>Capital:</strong> {dados.capital?.[0]}</p>
          <p><strong>Região:</strong> {dados.region}</p>
          <p><strong>População:</strong> {dados.population.toLocaleString()}</p>
          <p><strong>Área:</strong> {dados.area.toLocaleString()} km²</p>
        </div>
      )}
    </div>
  );
}
