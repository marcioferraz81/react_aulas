import { useState, useEffect } from 'react';
import './Carrinho.css';
import { FaTrashAlt } from 'react-icons/fa'; // ícone de lixeira

export default function Carrinho() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];
    setItens(carrinhoSalvo);
  }, []);

  const removerItem = (index) => {
    const novoCarrinho = [...itens];
    novoCarrinho.splice(index, 1);
    setItens(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  const limparCarrinho = () => {
    localStorage.removeItem('carrinho');
    setItens([]);
  };

  const total = itens.reduce((soma, item) => soma + item.preco, 0);

  return (
    <main className="carrinho-container">
      <h2>Seu Carrinho</h2>

      {itens.length === 0 ? (
        <p className="vazio">Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="itens-lista">
            {itens.map((item, i) => (
              <div className="item-card" key={i}>
                <h4>{item.nome}</h4>
                <p>R$ {item.preco.toFixed(2)}</p>
                <button className="botao-excluir" onClick={() => removerItem(i)}>
                  <FaTrashAlt style={{ marginRight: '5px' }} />
                  Excluir
                </button>
              </div>
            ))}
          </div>

          <div className="resumo">
            <p><strong>Total:</strong> R$ {total.toFixed(2)}</p>
            <button className="botao-limpar" onClick={limparCarrinho}>
              Esvaziar Carrinho
            </button>
          </div>
        </>
      )}
    </main>
  );
}
