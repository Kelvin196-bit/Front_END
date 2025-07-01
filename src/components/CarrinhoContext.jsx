import { createContext, useContext, useState, useEffect } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState(() => {
  const carrinhoSalvo = localStorage.getItem('carrinho');
  return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
});
  const [cupom, setCupom] = useState('');
  const [frete, setFrete] = useState(0);
  const [cep, setCep] = useState('');
  const [descontoCupom, setDesconto] = useState(0);

  const subtotal = carrinho.reduce((sum, p) => {
  const valor = p.priceDiscount ? p.priceDiscount : p.price;
  return sum + valor * p.quantidade;
}, 0);
  const total = (subtotal + frete - descontoCupom).toFixed(2);

   const aplicarCupom = () => {
    if (cupom === 'DESCONTO10') {
      setDesconto(10);
    } else if (cupom === 'DESCONTO30') {
      setDesconto(30);
    } else {
      setDesconto(0);
    }
  };

   const calcularFrete = () => {
    if (cep.length === 8) {
      setFrete(20);
    } else {
      setFrete(0);
    }
  };


  const adicionarAoCarrinho = (produto) => {
  setCarrinho((prevCarrinho) => {
    const itemExistente = prevCarrinho.find(
      (item) =>
        item.id === produto.id &&
        item.tamanho === produto.tamanho &&
        item.cor === produto.cor
    );

    if (itemExistente) {
      // Se já existe, apenas incrementa a quantidade
      return prevCarrinho.map((item) =>
        item.id === produto.id &&
        item.tamanho === produto.tamanho &&
        item.cor === produto.cor
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
    } else {
      // Se não existe, adiciona com quantidade inicial
      return [...prevCarrinho, { ...produto, quantidade: 1 }];
    }
  });
};


  const esvaziarCarrinho = () => setCarrinho([]);

  const removerDoCarrinho = (produto) => {
  setCarrinho((prevCarrinho) =>
    prevCarrinho.filter(
      (item) =>
        !(
          item.id === produto.id &&
          item.cor === produto.cor &&
          item.tamanho === produto.tamanho
        )
    )
  );
};


const incrementarQuantidade = (produto) => {
  setCarrinho((prev) =>
    prev.map((item) =>
      item.id === produto.id &&
      item.cor === produto.cor &&
      item.tamanho === produto.tamanho
        ? { ...item, quantidade: item.quantidade + 1 }
        : item
    )
  );
};


const decrementarQuantidade = (produto) => {
  setCarrinho((prev) =>
    prev.map((item) =>
      item.id === produto.id &&
      item.cor === produto.cor &&
      item.tamanho === produto.tamanho
        ? { ...item, quantidade: Math.max(1, item.quantidade - 1) }
        : item
    )
  );
};


useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      setCarrinho(JSON.parse(carrinhoSalvo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);


  return (
    <CarrinhoContext.Provider value={{carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        calcularFrete,
        esvaziarCarrinho,
        incrementarQuantidade,
        decrementarQuantidade,
        setCarrinho,
        subtotal,
        total,
        frete,
        setFrete,
        descontoCupom,
        cupom,
        setCupom,
        aplicarCupom,
        setDesconto,
        cep,
        setCep}}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
