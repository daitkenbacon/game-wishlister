import { useEffect, useState } from 'react';
import axios from 'axios';

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

    useEffect(() => {
        loadData()
    }, []);

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
    console.log(rawgData);

  return (
    <div>
        Wishlist Page
        {loading && 
            <p>Loading...</p>
        }
        {!rawgData &&
            <p>No data found.</p>
        }
        {error &&
            <p>{error}</p>
        }
    </div>
  )
}