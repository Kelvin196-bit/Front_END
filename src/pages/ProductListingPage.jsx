import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";
import { CiFilter } from "react-icons/ci";
import { ProductContext } from "../components/ProductContext";
import {  useContext, useState } from "react";


export default function ProductPage() {

  const { products } = useContext(ProductContext);

  const [sortOrder, setSortOrder] = useState("");
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  const [filter, setFilter] = useState(false);

  const handleFilter = () => setFilter(!filter);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "asc") {
      return (a.priceDiscount || a.price) - (b.priceDiscount || b.price);
    } else if (sortOrder === "desc") {
      return (b.priceDiscount || b.price) - (a.priceDiscount || a.price);
    }
    return 0;
  });


  return (
    <>
      <Section className="bg-light-gray-3 pt-20 md:pt-0">
        <div className="flex flex-col-reverse md:flex-row w-full justify-between items-center px-10 py-5 md:py-14">
          <p className="text-base text-dark-gray-2 py-3">
            <span className="font-bold">Resultados para "Tênis"</span>
          </p>
          <div className="flex items-center gap-2 sm:gap-80">
            <div className="flex flex-row justify-between">
  <div className="flex flex-col">
    <label
      htmlFor="sort"
      className="font-inter text-base text-dark-gray-2 mb-[5px]"
    >
      Ordenar por
    </label>
    <select
      id="sort"
      value={sortOrder}
      onChange={handleSortChange}
      className="w-[332px] h-9 font-inter text-sm text-dark-gray-2 px-2 py-1 border border-[#ccc] rounded"
    >
      <option value="">Selecione</option>
      <option value="asc">Menor preço</option>
      <option value="desc">Maior preço</option>
    </select>
  </div>
</div>

            <button onClick={handleFilter} className="bg-primary p-1.5 rounded-md md:hidden">
              <CiFilter size="40px" fill="#fff" />
            </button>
          </div>
        </div>

        <div className="flex md:gap-x-8 pb-20 ">
          <div className="bg-white h-fit ml-10 px-5 py-6 hidden md:block">
            <h1 className="text-sm font-bold text-dark-gray-2">Filtrar por</h1>
            <hr className="w-[248px] my-5 bg-light-gray-2" />
            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={[
                { text: "Adidas", value: "adidas" },
                { text: "Balenciaga", value: "balenciaga" },
                { text: "K-Swiss", value: "K-Swiss" },
                { text: "Nike", value: "Nike" },
                { text: "Puma", value: "Puma" },
              ]}
            />
            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={[
                { text: "Masculino", value: "Masculino" },
                { text: "Feminino", value: "Feminino" },
                { text: "Unisex", value: "Unisex" },
              ]}
            />
            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={[
                { text: "Esporte e lazer", value: "Esporte e lazer" },
                { text: "Casual", value: "Casual" },
                { text: "Utilitário", value: "Utilitário" },
                { text: "Corrida", value: "Corrida" },
              ]}
            />
            <FilterGroup
              title="Condição"
              inputType="radio"
              options={[
                { text: "Novo", value: "Novo" },
                { text: "Usado", value: "Usado" },
              ]}
            />
          </div>

          <ProductListing len={12} products={sortedProducts} />
        </div>

        {filter && (
          <div
            onClick={handleFilter}
            className="fixed inset-0 z-50 flex items-start justify-start bg-black bg-opacity-50"
          >
            <div
              className="bg-white h-screen w-3/4 sm:w-1/2 md:w-1/3 px-10 py-5"
              onClick={(e) => e.stopPropagation()}
            >
              <h1 className="text-sm font-bold text-dark-gray-2">Filtrar por</h1>
              <hr className="w-full my-5 bg-light-gray-2" />
              <FilterGroup
                title="Marca"
                inputType="checkbox"
                options={[
                  { text: "Adidas", value: "adidas" },
                  { text: "Balenciaga", value: "balenciaga" },
                  { text: "K-Swiss", value: "K-Swiss" },
                  { text: "Nike", value: "Nike" },
                  { text: "Puma", value: "Puma" },
                ]}
              />
              <FilterGroup
                title="Gênero"
                inputType="checkbox"
                options={[
                  { text: "Masculino", value: "Masculino" },
                  { text: "Feminino", value: "Feminino" },
                  { text: "Unisex", value: "Unisex" },
                ]}
              />
              <FilterGroup
                title="Categoria"
                inputType="checkbox"
                options={[
                  { text: "Esporte e lazer", value: "Esporte e lazer" },
                  { text: "Casual", value: "Casual" },
                  { text: "Utilitário", value: "Utilitário" },
                  { text: "Corrida", value: "Corrida" },
                ]}
              />
              <FilterGroup
                title="Condição"
                inputType="radio"
                options={[
                  { text: "Novo", value: "Novo" },
                  { text: "Usado", value: "Usado" },
                ]}
              />
            </div>
          </div>
        )}
      </Section>
    </>
  );
}
