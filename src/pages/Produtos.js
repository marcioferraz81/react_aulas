import { useEffect, useState } from 'react';
import ProdutoCard from '../components/ProdutoCard';

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('/produtos.json')
      .then(res => res.json())
      .then(data => setProdutos(data));
  }, []);

  const adicionarAoCarrinho = (produto) => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${produto.nome} adicionado ao carrinho!`);
  };

  return (
    <main style={{ padding: '1rem 2rem' }}>
      <h2>Produtos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {produtos.map(p => (
          <ProdutoCard key={p.id} produto={p} onAdd={adicionarAoCarrinho} />
        ))}
      </div>
    </main>
  );
}
