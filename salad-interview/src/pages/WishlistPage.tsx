import { useEffect, useState } from 'react';
import './WishlistPage.scss'
import axios from 'axios';
import WishlistCard from '../components/wishlist-card/WishlistCard';

type WishlistPageProps = {}

interface GameData {
    id: number;
    name: string;
    released: string;
    background_image: string;
}

interface IRawgData {
    count: number;
    next: string;
    previous: string;
    results: GameData[];
}


export default function WishlistPage({}: WishlistPageProps) {
    const [loading, setLoading] = useState(true);
    const [rawgData, setRawgData] = useState<IRawgData>();
    const [error, setError] = useState('');
    const [wishlist, setWishlist] = useState<Number[]>([]);

    var skeletonCards = [];
    for (var i = 0; i < 8; i++) {
        skeletonCards.push(<WishlistCard released='' background_image={'./teamtrees.png'} name='' variant='skeleton' key={i}></WishlistCard>);
    }

    useEffect(() => {
        const loadData = () => {
            axios({ method: 'GET', url: 'https://api.rawg.io/api/games?key=604d652296334e40942eba5c034620d3&dates=2022-04-28,2023-04-27' })
                .then((res) => {
                    setError('');
                    setRawgData(res.data);
                })
                .catch((err) => {
                    setError(err.message);
                })
                .finally(() => setLoading(false));
        };
        loadData();
    }, []);

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
    

  return (
    <div className='page-container'>
        <div className='wishlist-header'>
            <h1>
                Wishlist Page
            </h1>
            <div className='counter-container'>
                <h4>Items: {wishlist.length}</h4>

            </div>
        </div>

        {error &&
            <p>{error}</p>
        }
        <div className='wishlist-cards-container'>
            {!loading &&
                rawgData?.results.map((game) => {
                    const {id, name, released, background_image} = game;
                    const selected = false;
                    return (
                        <div className='card-container' onClick={() => handleWishlistClick(id)}>
                            <WishlistCard variant='standard' key={id} name={name} released={released} background_image={background_image} />
                        </div>
                    )
                })
            }
            {loading &&
                skeletonCards
            }
        </div>
    </div>
  )
}