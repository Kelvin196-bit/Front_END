import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { ProductContext,  } from "../components/ProductContext";
import { useEffect, useState, useContext, } from "react";
import { AuthContext } from "../components/AuthContext";

import "../index.css";



// Assets de imagens
import nike from "../assets/tenis.svg";
import tenis from "../assets/card/tenis.svg";
import calca from "../assets/card/calca.svg";
import camiseta from "../assets/card/camisa.svg";
import headphone from "../assets/card/headphones.svg";
import blusa from "../assets/card/blusa.svg";
import shoes from "../assets/card/shoes.svg";
import phone from "../assets/card/phone.svg";


// Componentes reutilizáveis
import Gallery from "../components/Gallery";
import PromoCard from "../components/PromoCard";
import Button from "../components/Button";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

export default function Home() {

  // Dados de slides para o Swiper (carrossel principal)
  const { products, setProducts, isLoading, setIsLoading, limparProdutos } = useContext(ProductContext);
  const {token} = useContext(AuthContext)
  

// ideal chamar esse fetch no login para não ficar re-renderizando
  useEffect(() => {
  if (!token) {
    console.log("Token não encontrado. Abortando fetch de produtos.");
    return;
  }

  console.log("Iniciando fetch de produtos com token:", token);
  setIsLoading(true);

  fetch("http://localhost:3000/api/private/v1/product/search", {
    headers: {
      token: token,
    },
  })
    .then(res => {
      console.log("Resposta HTTP recebida, status:", res.status);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
  console.log("Dados do fetch convertidos para JSON:", data);
  const productsArray = Array.isArray(data) ? data : data.products || [];
  setProducts(productsArray);

  if (productsArray.length > 0) {
    console.log("Imagens do primeiro produto:", productsArray[0].images);
    console.log("imagens de products", products)
  } else {
    console.log("Nenhum produto encontrado na resposta.");
  }
})
    .catch(err => {
      console.error("Erro ao buscar produtos:", err);
    })
    .finally(() => {
      console.log("Finalizando o fetch, setando isLoading para false");
      setIsLoading(false);
    });
}, [token]);


  if (isLoading) return <p>Carregando produtos...</p>;
  if (!token) return <p>Você precisa estar logado para ver os produtos.</p>;



  // Cards promocionais (com desconto)
  const cardPromo = [
    { id: 1, promo: 30, text: "Novo drop Supreme", img: blusa },
    { id: 2, promo: 30, text: "Coleção Adidas", img: shoes },
    { id: 3, promo: 30, text: "Novo Beat Bass", img: phone }
  ];

  // Ícones de categorias em destaque
  const colecaoDestaque = [
    { id: 1, title: "Camisetas", img: camiseta },
    { id: 2, title: "Calças", img: calca },
    { id: 3, title: "Headphones", img: headphone },
    { id: 4, title: "Tênis", img: tenis }
  ];


  // Alerta temporário para seções não implementadas
  const handleOfertas = () => alert("Ops, em construção!!");



  return (
    <div className="bg-light-gray-3">
        {/* Carrossel de destaque */}
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          navigation
        >
          {products?.[0]?.images.slice(1).map((item) => (
            <SwiperSlide key={item.id}>
              <Gallery
                img={item.content}
                onClick={handleOfertas}
                subtitle="Melhores ofertas personalizadas"
                title="Queima de"
                titleText="stoque Nike 🔥"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ex eos hic quisquam molestias blanditiis vel, ?"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Sessão de cards promocionais */}
        <section>
          <div>
            <h3 className="px-5 pt-5 pb-4 lg:px-48 font-bold text-xl text-start">
              Coleções em destaque
            </h3>

            <div className="pb-5 flex flex-col md:flex-row md:justify-center md:gap-5">
              {cardPromo.map((item) => (
                <div key={item.id} className="py-3 flex flex-col items-center">
                  <PromoCard
                    img={item.img}
                    promo={item.promo}
                    text={item.text}
                    onClick={handleOfertas}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sessão com ícones das categorias */}
          <div className="py-5 flex flex-col">
            <h3 className="px-5 text-xl text-dark-gray font-bold md:text-center">
              Coleções em destaques
            </h3>

            <div className="gap-3 py-5 flex justify-around items-center md:justify-center md:gap-20">
              {colecaoDestaque.map((item) => (
                <div key={item.id} className="py-2 flex gap-3 flex-col items-center">
                  <div className="h-auto p-5 w-auto md:p-3 hover:cursor-pointer rounded-full bg-white shadow-sm hover:shadow-lg hover:scale-110 duration-200 transition-shadow">
                    <img src={item.img} alt={item.title} className="svg" />
                  </div>
                  <h3 className="font-medium hover:text-primary hover:scale-105 hover:cursor-pointer">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Produtos em destaque com título e botão "Ver todos" */}
        <Section className="w-full pt-14 pb-20 px-2 box-border" title="Produtos em alta" link={{ text: "Ver todos" }}>
          <ProductListing len={8} products={products} />
        </Section>

        {/* Sessão promocional especial */}
        <section className="bg-white">
          <div className="h-auto md:h-[50vw] lg:h-[60vh] py-5 flex flex-col md:flex-row md:justify-center md:items-center">
            <div className="h-72 w-72 bg-gradient-to-b from-gray-200 to-white rounded-full flex items-center justify-center m-auto">
              <img src={nike} alt="Tênis Nike" className="w-3/4 h-auto" />
            </div>
            <div className="pb-10 px-10 flex flex-col sm:items-center md:items-start md:w-[50vw]">
              <p className="text-warning font-bold text-start">Oferta especial</p>
              <h2 className="py-4 text-3xl font-semibold text-dark-gray-2 md:text-4xl">
                Air Jordan edição de <br /> <span>colecionador</span>
              </h2>
              <p className="py-1 pb-5 text-md font- md:font-normal text-dark-gray-2 sm:w-[60vw] md:w-auto md:text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto, ex corrupti corporis facere quaerat iste fugit assumenda expedita laborum.
              </p>
              <Button text="Ver oferta" onClick={handleOfertas} />
            </div>
          </div>
        </section>
    </div>
  );
}
