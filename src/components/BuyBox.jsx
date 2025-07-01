import StarRating from "./ProductDetails/StarRating";
import ProductOptions from "./ProductOptions";
import { useNavigate, useParams } from 'react-router-dom';
import { useCarrinho } from './CarrinhoContext';
import { useState } from 'react';


export default function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  options,
  products,

}) {


  const { id } = useParams();
  const { adicionarAoCarrinho } = useCarrinho();

  const produto = products.find(p => p.id === Number(id));

  const [tamanho, setTamanho] = useState('');
  const [cor, setCor] = useState('');

  const navigate = useNavigate();

  const handleAdicionar = (acao) => {
  if (!tamanho || !cor) {
    alert('Selecione o tamanho e a cor antes de continuar!');
    return;
  }

  const produtoCarrinho = {
    id: produto.id,
    name: produto.name,
    image: produto.images[0].content,
    price: produto.price,
    priceDiscount: produto.priceDiscount,
    tamanho,
    cor
  };

  navigate('/home/cart')

  adicionarAoCarrinho(produtoCarrinho);

  if (acao === 'comprar') {
    navigate('/home/cart');
  } else {
    alert('Produto adicionado ao carrinho!');
  }
};
  
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-[32px] leading-[36px] tracking-[1px]">{name}</h1>

      <p className="text-xs font-medium leading-[18px] tracking-[0.5px]">{`Ref: ${reference}`}</p>

      <div className="flex items-center gap-[10px]">
        <StarRating stars={stars} active={true} />
        <div className="flex items-center justify-center w-[63px] h-[23px] gap-[4px] rounded bg-[#F6AA1C] text-white text-sm">
          <span className="text-xs font-semibold leading-none flex items-center">{stars}</span>
        <div className="flex items-center">
      <StarRating stars={stars} active={false} />
  </div>
</div>

        <span className="text-sm font-medium leading-[22px] tracking-[0.25px] text-[#8F8F8F]">
          ({rating} avaliações)
        </span>
      </div>

      <div className="flex items-center gap-2">
        {hasDiscount ? (
          <>
            <div className="text-base font-normal line-through text-[#CCCCCC] tracking-[0.75px]">
              R${price.toFixed(2)}
            </div>
            <span className="text-[32px] font-bold leading-[36px] tracking-[1px] text-[#1F1F1F]">
              R${priceDiscount.toFixed(2)}
            </span>
          </>
        ) : (
          <span className="text-[32px] font-bold leading-[36px] tracking-[1px] text-[#1F1F1F]">
            R${price.toFixed(2)}
          </span>
        )}
      </div>

      <h3 className="text-sm font-bold leading-[22px] tracking-[0.75px] text-[#8F8F8F]">
        Descrição do produto
      </h3>

      <p className="text-sm font-medium leading-[22px] tracking-[0.25px] text-justify">
        {description}
      </p>

      <div className="flex flex-col justify-center gap-2.5">
  <h3 className="font-inter font-bold text-sm leading-[22px] tracking-[0.75px] text-[#8F8F8F]">Tamanho</h3>

<ProductOptions
  options={[
    { nome: '39', valor: 39 },
    { nome: '40', valor: 40 },
    { nome: '41', valor: 41 },
    { nome: '42', valor: 42 },
    { nome: '43', valor: 43 },
  ]}
  radius="4px"
  shape="square"
  type="text"
  onSelect={(nomeSelecionado) => setTamanho(nomeSelecionado)}
/>


  <h3 className="font-inter font-bold text-sm leading-[22px] tracking-[0.75px] text-[#8F8F8F]">Cor</h3>
  <ProductOptions
  options={[
    { nome: 'Azul', valor: '#6FEEFF'},
    { nome: 'Vermelho', valor: '#FF6969' },
    { nome: 'Cinza', valor: '#5E5E5E'},
    { nome: 'Roxo', valor: '#6D70B7',},
  ]}
  radius="4px"
  shape="circle"
  type="color"
  onSelect={(nomeSelecionado) => setCor(nomeSelecionado)}
/>

</div>




      <div className="flex flex-col lg:flex-row gap-4 w-full">
  <button
    className="w-full h-12 bg-[#FFB31F] text-white rounded-lg font-inter font-bold text-base leading-6 tracking-[0.75px] text-center align-middle cursor-pointer"
    onClick={() => handleAdicionar('comprar')}
  >
    Comprar
  </button>

  <button
    className="w-full h-12 bg-[#C92071] text-white rounded-lg font-inter font-bold text-base tracking-[0.75px] text-center align-middle cursor-pointer"
    onClick={() => handleAdicionar('carrinho')}
  >
    Adicionar ao Carrinho
  </button>
</div>



    </div>
  );
}
