// Importações necessárias
import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useCarrinho } from './CarrinhoContext';
import { AuthContext } from "../components/AuthContext";

// Componentes reutilizáveis
import Nav from "./Nav";
import Menu from "./Menu";
import Logo from "./Logo";
import Button from "./Button";
import cart from "../assets/icons/mini-cart.svg";



export default function Header() {

  const { usuario, logout} = useContext(AuthContext)
  const { carrinho, esvaziarCarrinho } = useCarrinho();
  const [modalAberto, setModalAberto] = useState(false);
  // Estado que controla a abertura do menu lateral em mobile
  const [open, setOpen] = useState(false);

  // Estado que controla a exibição da barra de pesquisa em mobile
  const [openSearch, setOpenSearch] = useState(false);

  // Texto digitado na barra de pesquisa
  const [query, setQuery] = useState(""); 

  // Hook para navegar programaticamente entre páginas
  const navigate = useNavigate();

  // Alterna visibilidade do menu lateral
  const handleOpenMenu = () => {
    setOpen(!open);
    setOpenSearch(false); // fecha pesquisa se estiver aberta
  };

  // Alterna visibilidade da busca mobile
  const handleOpenSearch = () => {
    setOpen(false); // fecha menu se estiver aberto
    setOpenSearch(!openSearch);
  };

  // Ao submeter o formulário de busca, redireciona para a página de resultados
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/home/produtos?filter=${query}`);
  };
  //Vai para pagina do carrinho
  const handleNavigate = () =>{
    navigate('/home/cart');
    window.scrollTo(0, 0);
  }
  // Vai para a tela de login
  const handleEntrar = () => {
        navigate("/");
        logout();
  }
    

  // Vai para a tela de cadastro
  const handleRegister = () => navigate("/register");

  // Estado que mostra ou esconde o mini-carrinho
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Alterna o mini-carrinho ao clicar no ícone
  const handleMouseEnter = () => setIsPopupVisible(!isPopupVisible);

  return (
    <header className="py-5 md:flex-col bg-white fixed md:relative w-full z-50 top-0 shadow-md md:shadow-none">
      <div className="flex justify-between items-center px-5">
        {/* Botão de menu hambúrguer (visível no mobile) */}
        <Menu onClick={handleOpenMenu} />

        {/* Logo da loja (SVG) */}
        <Logo type="logoHeader" />

        {/* Barra de pesquisa visível apenas no desktop */}
        <div className="hidden md:flex items-center justify-around bg-neutral-200/80 rounded-md w-1/2">
          <form onSubmit={handleSearchSubmit} className="flex items-center w-full">
            <input
              id="search"
              type="text"
              placeholder="Pesquisar por produtos..."
              className="p-2 w-full outline-none bg-transparent focus:border-pink-600 focus:ring-pink-600 focus:ring-2 rounded-md"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="relative mx-2">
              <CiSearch size="18px" color="#c8c8c8" className="absolute top-1/2 transform -translate-y-1/2 right-0" />
            </button>
          </form>
        </div>

        {/* Botões de login e cadastro (desktop) */}
        <div className="hidden md:flex md:items-center gap-5">
          <button
            className="lg:text-lg md:text-sm underline underline-offset-4 hover:text-primary hover:font-medium hover:transition-colors hover:scale-105 ease-out"
            onClick={handleRegister}
          >
            Cadastre-se
          </button>
          <Button type="submit" text="Entrar" onClick={handleEntrar} />
        </div>
        <span>Bem vindo, {usuario}</span>
        {/* Ações no canto direito (mobile) */}
        <div className="flex items-center justify-around gap-1">
          {/* Ícone de busca (mobile) */}
          <CiSearch
            color="#c8c8c8"
            className="h-auto w-6 md:hidden"
            onClick={handleOpenSearch}
          />

          {/* Campo de busca que aparece ao clicar no ícone (mobile) */}
          <div className="flex flex-col md:hidden">
            {openSearch && (
              <div className="flex w-screen absolute p-2 top-16 left-0 bg-white shadow-lg z-50">
                <form onSubmit={handleSearchSubmit} className="flex w-full">
                  <input
                    id="pesquisar"
                    type="text"
                    placeholder="Pesquisar por produto..."
                    className="p-2 w-full rounded-md bg-neutral-200 outline-none focus:border-pink-600 focus:ring-pink-600 focus:ring-2"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button type="submit">
                    <CiSearch color="#c8c8c8" className="h-auto w-8" />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Ícone do carrinho com popup flutuante */}
          <div className="relative" >
            <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {carrinho.reduce((total, item) => total + item.quantidade, 0)}
            </div>
            <img src={cart} alt="Icon Cart" className="h-auto w-6 cursor-pointer" onClick={() => setModalAberto(!modalAberto)}/>
            {modalAberto && (
  <div className="absolute right-0 z-[1000] w-[315.43px] bg-white shadow-md flex flex-col gap-5 p-[30px]">
    <h2 className="font-inter font-bold text-[16px] tracking-[0.75px]">Meu Carrinho</h2>
    {carrinho.length === 0 ? (
      <p>Carrinho vazio.</p>
    ) : (
      <div className="flex flex-col gap-5 border-t border-b border-[#CCCCCC] pt-5 pb-5">
        {carrinho.map((produto, index) => (
          <div key={index} className="w-[255px] h-[93px] flex gap-[10px]">
            <img
              src={produto.image}
              alt={produto.image}
              className="w-[71.18px] h-[58px] rounded-[2.67px]"
            />
            <div className="w-[170px] h-[93px] flex flex-col justify-center items-start">
              <p className="font-inter font-bold text-[14px] leading-[20px] tracking-[0.75px] text-[#1F1F1F] flex" >
                {produto.name} <span className="font-normal text-light-gray">x{produto.quantidade}</span>
        
              </p>
                <p className="font-inter font-bold text-[12px] leading-[20px] tracking-[0.75px] text-light-gray">Tamanho: <span className="font-inter font-bold text-[12px] leading-[20px] tracking-[0.75px] text-dark-gray">{produto.tamanho}</span></p>
              <div className="w-full flex justify-between items-center">
                <p className="font-inter font-bold text-[12px] leading-[20px] tracking-[0.75px] text-light-gray">Cor: <span className="font-inter font-bold text-[12px] leading-[20px] tracking-[0.75px] text-dark-gray">{produto.cor}</span></p>
                <span className="font-inter font-bold text-[14px] leading-[20px] tracking-[0.75px] text-dark-gray">R$ {produto.price.toFixed(2)}</span>
              </div>
                
            </div>
          </div>
        ))}

        <div className="flex justify-between border-t border-[#CCCCCC] pt-5">
          <span className="font-sa font-bold text-[16px] tracking-[0.75px] text-[#1F1F1F]">Valor total:</span>
          <p className="font-inter font-bold text-[16px] leading-[24px] tracking-[0.75px] text-center text-[#EE4266]">
            R$ {carrinho.reduce((total, p) => total + p.price * p.quantidade, 0).toFixed(2)}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <span onClick={esvaziarCarrinho} className="underline cursor-pointer">Esvaziar</span>
            <button onClick={handleNavigate} className="w-[124.7px] h-[40px] bg-[#C92071] text-[#F5F5F5] font-inter font-bold text-[14px] leading-[22px] tracking-[0.75px] text-center rounded cursor-pointer border-none">
              Ver Carrinho
            </button>
        </div>
      </div>
    )}
  </div>
)}

          </div>
        </div>
      </div>

      {/* Navbar horizontal (visível só no desktop) */}
      <Nav className="hidden md:block" />

      {/* Menu lateral (visível só em mobile) */}
      {open && (
        <>
          {/* Fundo escuro atrás do menu */}
          <div
            className="fixed top-[10%] inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={handleOpenMenu}
          ></div>

          {/* Menu lateral esquerdo */}
          <Nav className="fixed overflow-scroll z-50 bg-white w-3/4 h-full p-5 top-[9.2%] left-0 shadow-lg md:hidden" />
        </>
      )}
    </header>
  );
}
