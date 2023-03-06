import SkeletonCard from "../skeleton-card/SkeletonCard";

const SkeletonCards: React.FC<{}> = () => {
  const skeletonCards = [];
  for (var i = 0; i < 8; i++) {
    skeletonCards.push({
      id: i,
      name: "",
      released: "",
      background_image: "./teamtrees.png",
    });
  }

  return (
    <>
      {skeletonCards.map((game) => {
        const { id, name, released, background_image } = game;
        return (
          <div key={id} className="cards-container">
            <SkeletonCard
              selected={false}
              id={id}
              name={name}
              released={released}
              background_image={background_image}
            />
          </div>
        );
      })}
    </>
  );
};

export default SkeletonCards;
