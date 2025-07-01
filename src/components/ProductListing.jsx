import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";


export default function ProductListing({ len, products = [] }) {


  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const query = searchParams.get("filter")?.toLowerCase() || "";

  useEffect(() => {
    const result = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(result);
    console.log("filtro", result)
  }, [query, products]);
  

  return (
    <div className='flex justify-center box-border flex-wrap md:w-[80vw] m-auto gap-x-6 gap-y-8'>
      {filteredProducts.length === 0 ? (
        <p className='text-center pb-[60%] w-full mt-4 text-lg text-gray-500'>
          Nenhum produto encontrado.
        </p>
      ) : (
        Array.from({ length: len }).map((_, index) => {
          const product = filteredProducts[index % filteredProducts.length];
          console.log("PRODUTO", product)
          return (
            <ProductCard
              key={index}
              id={product.id}
              category={product.categorias?.[0]?.category}
              name={product.name}
              image={product.images?.[0]?.content}
              price={product.price}
              priceDiscount={product.price_with_discount}
            />
          );
        })
      )}
    </div>
  );
} 