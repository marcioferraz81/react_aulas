import { useEffect, useState } from 'react';
import ListaItens from '../components/ListaItens';

export default function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('/dados.json')
      .then((res) => res.json())
      .then((data) => setDados(data))
      .catch((err) => console.error("Erro ao carregar JSON:", err));
  }, []);

  return (
    <main style={{ padding: '1rem 2rem' }}>
      <h2>Lista de Itens</h2>
      <ListaItens itens={dados} />
    </main>
  );
}
