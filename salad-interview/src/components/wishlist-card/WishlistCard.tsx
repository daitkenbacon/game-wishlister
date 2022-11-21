import './WishlistCard.scss';

type WishlistCardProps = {
    name: string;
    released: string;
    background_image: string;
    variant: string;
}

export default function WishlistCard(props: WishlistCardProps) {
    return (
        <div className={`card-container fadeIn`} >
            <img src={props.background_image} alt={props.name} />
            <div className="card-footer">
                <p className='title'>{props.name}</p>
                <p className='released'>{props.released}</p>
                {props.variant==='skeleton' && <div className='loader'></div>}
            </div>
        </div>
    )
}