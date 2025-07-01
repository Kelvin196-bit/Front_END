import StarIcon from './StarIcon';

const StarRating = ({ stars, active = true }) => {
  if (!active) {
    // Inativo: apenas uma estrela branca
    return (
      <div className="star-rating">
        <StarIcon color="white" strokeColor="#F6AA1C" strokeWidth={1} />

      </div>
    );
  }

  // Ativo: até 5 estrelas, conforme a parte inteira do rating
  const neWstar = [];
  const filledStars = Math.floor(stars);  // Parte inteira
  console.log(filledStars)

  for (let i = 0; i < 5; i++) {
    const color = i < filledStars ? '#F6AA1C' : 'white';
    neWstar.push(<StarIcon key={i} color={color} strokeColor="#F6AA1C" strokeWidth={1} />);
  }

  return <div className="flex align-items-cente gap-1">{neWstar}</div>;
};

export default StarRating;
