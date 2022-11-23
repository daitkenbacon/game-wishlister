import WishlistCard from "../wishlist-card/WishlistCard";
import { GameData } from '../../pages/wishlist-page/WishlistPage';

interface FilteredCardsListProps {
    gameCards: GameData[];
    wishlist: Number[];
    handleWishlistClick: (id: number) => void;
}

const FilteredCardsList: React.FC<FilteredCardsListProps> = (props: FilteredCardsListProps) => {

    return(
        <>{
            props.gameCards?.map((game) => {
                const { id, name, released, background_image } = game;
                  return (
                    <div
                      key={id}
                      className="cards-container"
                      onClick={() => props.handleWishlistClick(id)}
                    >
                      <WishlistCard
                        variant="standard"
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
              })
        }</>
    )
}

export default FilteredCardsList;