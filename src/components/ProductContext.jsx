import { createContext, useState, useEffect } from "react";
// criei um contexto para compartilhar os dados dos produtos já que aparece em várias páginas
export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    // Carrega do localStorage se existir
    const localData = localStorage.getItem("products");
    return localData ? JSON.parse(localData) : [];
  });
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

//   useEffect(() => {
//   localStorage.removeItem("products");
// }, []);



const limparProdutos = () => {
  setProducts([]);
  localStorage.removeItem("products");
};



  
  return (
    <ProductContext.Provider value={{ products, setProducts, isLoading, setIsLoading, filter, setFilter, limparProdutos}}>
      {children}
    </ProductContext.Provider>
  );
}