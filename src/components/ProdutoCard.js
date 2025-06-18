import './ProdutoCard.css';

export default function ProdutoCard({ produto, onAdd }) {
  return (
    <div className="produto-card">
      <h3>{produto.nome}</h3>
      <p>R$ {produto.preco.toFixed(2)}</p>
      <button onClick={() => onAdd(produto)}>Adicionar ao Carrinho</button>
    </div>
  );
}
