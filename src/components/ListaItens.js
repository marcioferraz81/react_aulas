import './ListaItens.css';

export default function ListaItens({ itens }) {
  if (!itens.length) {
    return <p>Carregando dados...</p>;
  }

  return (
    <ul className="lista-itens">
      {itens.map((item, index) => (
        <li key={index} className="item-card">
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
        </li>
      ))}
    </ul>
  );
}
