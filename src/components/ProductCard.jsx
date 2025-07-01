import { Link } from "react-router-dom";

const ProductCard = ({id, category, image, name, price, priceDiscount }) => {
  
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link to={`/home/produtos/${id}`} onClick={handleScrollTop}>
    <div className='w-[39vw] sm:w-[30vw] md:w-[17vw] pt-10 cursor-pointer'>
      <div className="h-[30vh] md:h-[35vh] flex justify-center items-center bg-white">
        <img
          className='h-auto w-[39vw] md:w-[14vw] object-cover pb-6 box-border -rotate-12'
          src={image}
          alt={name}
        />
      </div>

      <p className='py-1 font-bold text-xs'>{category}</p>

      <h2 className='text-dark-gray-2 text-lg md:text-xl'>{name}</h2>

      <div className='flex gap-[15px]'>
        {priceDiscount && (
          <p className='text-light-gray text-lg md:text-xl line-through'>
            R${priceDiscount.toFixed(2)}
          </p>
        )}
        <p className='text-dark-gray text-lg md:text-xl font-bold'>
          R${price.toFixed(2)}
        </p>
      </div>
    </div>
  </Link>
  );
};

export default ProductCard;
