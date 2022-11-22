import { useEffect, useState } from 'react';
import './WishlistPage.scss'
import axios from 'axios';
import WishlistCard from '../components/wishlist-card/WishlistCard';
import apiKey from '../salad-config.json';

interface GameData {
    id: number;
    name: string;
    released: string;
    background_image: string;
}

const WishlistPage: React.FC<{}> = () => {
    const [loading, setLoading] = useState<Boolean>(true);
    const [gameCards, setGameCards] = useState<GameData[]>([]);
    const [error, setError] = useState('');
    const [wishlist, setWishlist] = useState<Number[]>([]);
    const [isShowAll, setIsShowAll] = useState<Boolean>(true);

    const today = new Date();
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 1);

    const skeletonCards = [];
    for (var i = 0; i < 8; i++) {
        skeletonCards.push({id: i, name: '', released: '', background_image: './teamtrees.png'});
    }

    useEffect(() => {
        const loadData = () => {
            axios({ method: 'GET', url: `https://api.rawg.io/api/games?key=${apiKey['key']}&dates=${
                today.getFullYear()}-${today.getMonth()+1}-${today.getDate()},${nextDate.getFullYear()+1}-${nextDate.getMonth()+1}-${nextDate.getDate()}`})
                .then((res) => {
                    setError('');
                    setGameCards(res.data.results);
                })
                .catch((err) => {
                    setError(err.message);
                })
                .finally(() => {
                    setGameCards((oldState) => oldState.sort((a,b) => {
                        const aDate = parseInt(a.released.split('-').join(''),10);
                        const bDate = parseInt(b.released.split('-').join(''),10);
                        return (
                            aDate - bDate
                        )
                    }))
                    setLoading(false)
                });
        };
        loadData();
    });

    const removeWishlistItem = (id: number) => {
        let filteredArray = wishlist.filter(item  => item!==id);
        setWishlist(filteredArray);
    }

    const addWishlistItem = (id: number) => {
        setWishlist([
            ...wishlist,
            id
        ])
    }

    const handleWishlistClick = (id: number) => {
        !wishlist.includes(id) &&
            addWishlistItem(id);

        wishlist.includes(id) && (
            removeWishlistItem(id)
        )
    }

    const handleShowAllToggle = () => {
        setIsShowAll(!isShowAll);
    }
    

  return (
    <div className='page-container'>
        <div className='wishlist-header'>
            <h1>
                Wishlist Maker
            </h1>
            <div className='counter-container'>
                <h4>Items: {wishlist.length}</h4>
                <label className='checkbox-container' onChange={handleShowAllToggle}>
                    <input type="checkbox" defaultChecked/>
                    <span className='checkmark'></span>
                    Show All
                </label>
            </div>
        </div>

        {error &&
            <p>{error}</p>
        }
        <div className='wishlist-cards-container'>
            {(!loading && isShowAll) &&
                gameCards?.map((game) => {
                    const {id, name, released, background_image} = game;
                    return (
                        <div key={id} className='cards-container' onClick={() => handleWishlistClick(id)}>
                            <WishlistCard variant='standard' selected={wishlist.find(item => item===id) ? true : false} id={id} name={name} released={released} background_image={background_image} />
                        </div>
                    )
                })
            }
            {(!loading && !isShowAll) &&
                gameCards?.map((game) => {
                    const {id, name, released, background_image} = game;
                    if(wishlist && wishlist.find(item => item===id)){
                        return (
                            <div key={id} className='cards-container' onClick={() => handleWishlistClick(id)}>
                                <WishlistCard variant='standard' selected={wishlist.find(item => item===id) ? true : false} id={id} name={name} released={released} background_image={background_image} />
                            </div>
                        )
                    } 
                    return null;
                })
            }
            {(!isShowAll && wishlist.length===0) &&
                <h1>No wishlisted items!</h1>
            }
            {loading &&
                skeletonCards.map((game) => {
                    const {id, name, released, background_image} = game;
                    return (
                        <div key={id} className='cards-container'>
                            <WishlistCard variant='skeleton' selected={false} id={id} name={name} released={released} background_image={background_image} /> 
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default WishlistPage;