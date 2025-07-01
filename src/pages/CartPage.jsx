import { NavLink } from "react-router-dom";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import { useCarrinho } from '../components/CarrinhoContext';
import nikeG from "../assets/products/nike-yellow.png";
import nikeB from "../assets/products/nike-black.png";
import nikeBlue from "../assets/products/nike-blue.png";
import { useContext,} from "react";
import { ProductContext } from "../components/ProductContext";

export default function CartPage() {


  const { products } = useContext(ProductContext);

  const {
    carrinho,
    calcularFrete,
        adicionarAoCarrinho,
        removerDoCarrinho,
        esvaziarCarrinho,
        incrementarQuantidade,
        decrementarQuantidade,
        setCarrinho,
        subtotal,
        total,
        frete,
        setFrete,
        cupom,
        setCupom,
        aplicarCupom,
        setDesconto,
        cep,
        setCep,
        descontoCupom
  } = useCarrinho();

  const handleClick = () => window.scrollTo(0, 0);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:gap-4 justify-center pt-32 lg:pt-14 px-5 lg:px-7 bg-light-gray-3">
        <div className="lg:w-4/6 flex flex-col">
          <div className="px-6 py-7 bg-white ">
            <div className="flex justify-center items-center">
              <h1 className="w-full font-bold font-sm text-dark-gray-2 mb-2 md:">MEU CARRINHO</h1>
              <span className="flex w-full justify-end gap-9">
                <h1 className="hidden md:block font-medium font-sm text-dark-gray-2 mr-[60px]">QUANTIDADE</h1>
                <h1 className="hidden md:block font-medium font-sm text-dark-gray-2 mr-[25px]">UNITÁRIO</h1>
                <h1 className="hidden md:block font-medium font-sm text-dark-gray-2 mr-[45px]">TOTAL</h1>
              </span>
            </div>
            {carrinho.length === 0 ? (
  <p className="text-[14px] font-medium text-[#1F1F1F]">Vazio</p>
) : (
  <>
    {carrinho.map((p, i) => {
      const valor = p.priceDiscount ? p.priceDiscount : p.price;
      return (
        <div
  key={i}
  className="w-full border-t border-[#CCCCCC] py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
>
  {/* Imagem e dados do produto */}
  <div className="flex gap-5 items-center md:w-[320px]">
    <img src={p.image} width={127} height={104} className="object-contain" />
    <div className="flex flex-col gap-1 text-left">
      <h2 className="font-bold text-sm">{p.name}</h2>
      <p className="text-sm text-[#1F1F1F]">
        <span className="text-[#8F8F8F]">Cor:</span> {p.cor}
      </p>
      <p className="text-sm text-[#1F1F1F]">
        <span className="text-[#8F8F8F]">Tamanho:</span> {p.tamanho}
      </p>
    </div>
  </div>

  {/* Quantidade */}
  <div className="flex flex-col items-center gap-2 md:ml-[150px]">
    <div className="flex items-center gap-2">
      <button
        onClick={() => decrementarQuantidade(p)}
        className="w-8 h-8 border rounded bg-light-gray-3 "
      >-</button>
      <p className="text-sm">{p.quantidade}</p>
      <button
        onClick={() => incrementarQuantidade(p)}
        className="w-8 h-8 border rounded bg-light-gray-3"
      >+</button>
    </div>
    <button
      onClick={() => removerDoCarrinho(p)}
      className="text-xs underline mt-1 text-gray-500 hover:text-primary"

    >
      Remover item
    </button>
  </div>

  {/* Preços (usando estrutura solicitada) */}
<div className="w-full flex flex-row justify-between items-start gap-4 md:w-[300px] mx-auto pr-[20px]">
  {/* Coluna da esquerda: rótulos */}
  <div className="flex flex-col gap-2 text-left">
    <span className="md:hidden text-[14px]">Unitário:</span>
    <span className="md:hidden text-[16px] font-bold">Total:</span>
  </div>

  {/* Coluna da direita: preços */}
  <div className="flex flex-col gap-2 md:flex-row md:gap-[50px]">
    <div className="flex gap-5 justify-between md:flex-col">
      <p className="text-[14px] line-through text-[#CCCCCC]">R$ {p.price.toFixed(2)}</p>
      <p className="text-[16px] font-bold text-[#474747]">R$ {valor.toFixed(2)}</p>
    </div>
    <div className="flex gap-5 justify-between md:flex-col">
      <p className="text-[14px] line-through text-[#CCCCCC]">R$ {(p.price * p.quantidade).toFixed(2)}</p>
      <p className="text-[16px] font-bold text-[#474747]">R$ {(valor * p.quantidade).toFixed(2)}</p>
    </div>
  </div>
</div>
</div>


        
      );
    })}

    
  </>
)}

            <hr className="hidden lg:block mt-5 bg-light-gray-2" />
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-between md:pl-[25px] md:pr-[25px] lg:gap-9 lg:pb-7 lg:bg-white">
            <div className="mt-3 lg:m-0 p-7 lg:p-0 bg-white">
              <h2 className="font-bold text-xs text-dark-gray-2 pb-2">Cupom de desconto</h2>
              <div className="flex flex-col lg:flex-row items-center gap-3">
                <input
                  id="pesquisar"
                  type="text"
                  placeholder="Insira seu código"
                  className="w-full lg:w-[270px] p-3 rounded-md bg-light-gray-3 outline-none focus:border-pink-600 focus:ring-pink-600 focus:ring-2"
                />
                <button className="w-full lg:w-28 p-3 rounded-md bg-light-gray-3 hover:bg-primary text-primary hover:text-white font-bold text-sm">
                  OK
                </button>
              </div>
            </div>

            <div className="mt-3 lg:m-0 p-7 lg:p-0 bg-white">
              <h2 className="font-bold text-xs text-dark-gray-2 pb-2">Calcular frete</h2>
              <div className="flex flex-col lg:flex-row items-center gap-3">
                <input
                  id="pesquisar"
                  type="text"
                  placeholder="Insira seu código"
                  className="w-full lg:w-[270px] p-3 rounded-md bg-light-gray-3 outline-none focus:border-pink-600 focus:ring-pink-600 focus:ring-2"
                />
                <button className="w-full lg:w-28 p-3 rounded-md bg-light-gray-3 hover:bg-primary text-primary hover:text-white font-bold text-sm">
                  OK
                </button>
              </div>
            </div>
          </div>

          <div onClick={handleClick}>
            <Section
              className="hidden lg:block pt-16 pb-32 px-10"
              title="Produtos Relacionados"
              link={{ text: "Ver todos" }}
            >
              <ProductListing len={4} products={products} />
            </Section>
          </div>
        </div>

        <div className="lg:w-1/4 h-fit px-6 py-7 mt-3 lg:m-0 bg-white">
          <h1 className="w-full font-bold font-sm text-dark-gray-2">RESUMO</h1>
          <hr className="my-5 bg-light-gray-2" />
          <div className="flex flex-col gap-4">
            <p className="flex justify-between text-sm font-medium text-light-gray">
              Subtotal: <span className="text-dark-gray">R$ {subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-sm font-medium text-light-gray">
              Frete: <span className="text-dark-gray">R$ {frete.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-sm font-medium text-light-gray">
              Desconto: <span className="text-dark-gray">R$ {descontoCupom.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-sm font-bold text-dark-gray-2">
              Total: <span className="text-error">R$ {total}</span>
            </p>
          </div>
          <p className="pt-1 pb-5 text-xs text-light-gray text-end">
            ou 10x de R$ {(total / 10).toFixed(2)} sem juros
          </p>
          <NavLink
            to="/home/checkoutForm"
            className="hidden lg:block w-full py-2 px-2 bg-warning text-white rounded-md text-center"
            onClick={handleClick}
          >
            Continuar
          </NavLink>
        </div>
      </div>
    </>
  );
}
