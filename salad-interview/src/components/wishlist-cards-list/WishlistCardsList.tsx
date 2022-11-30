import WishlistCard from "../wishlist-card/WishlistCard";
import { GameData } from "../../pages/wishlist-page/WishlistPage";

interface FilteredCardsListProps {
  gameCards: GameData[];
  wishlist: Number[];
  handleWishlistClick: (id: number) => void;
  handleWishlistKeydown: (event: React.KeyboardEvent ,id: number) => void;
}

const FilteredCardsList: React.FC<FilteredCardsListProps> = (
  props: FilteredCardsListProps
) => {
  return (
    <>
      {props.gameCards?.map((game) => {
        const { id, name, released, background_image } = game;
        return (
          <div
            key={id}
            className="cards-container"
            onClick={() => props.handleWishlistClick(id)}
            onKeyDown={(e) => props.handleWishlistKeydown(e, id)}
            tabIndex={0}
          >
            <WishlistCard
              selected={
                props.wishlist.find((item) => item === id) ? true : false
              }
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

export default FilteredCardsList;
