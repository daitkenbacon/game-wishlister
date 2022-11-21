import './WishlistCard.scss';

type WishlistCardProps = {
    name: string;
    released: string;
    background_image: string;
    variant: string;
}

export default function WishlistCard({ variant, name, released, background_image}: WishlistCardProps) {
    return (
        <div className={`card-container fadeIn`} >
            <img src={background_image} alt={name} />
            <div className="card-footer">
                <p className='title'>{name}</p>
                <p className='released'>{released}</p>
                {variant==='skeleton' && <div className='loader'></div>}
            </div>
        </div>
    )
}