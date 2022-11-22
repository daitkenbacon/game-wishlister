import './WishlistCard.scss';

type WishlistCardProps = {
    name: string;
    released: string;
    background_image: string;
    variant: string;
    id: number;
    selected: boolean;
}

export default function WishlistCard(props: WishlistCardProps) {
    return (
        <div key={props.id} className={
            `card-container 
            ${props.variant==='skeleton' ? 'fadeIn' :  ''}
            ${props.selected ? 'selected' : ''}
            `} >
            <img src={props.background_image} alt={props.name} />
            <div className="card-footer">
                <p className='title'>{props.name}</p>
                <p className='released'>{props.released}</p>
                {props.variant==='skeleton' && <div className='loader'></div>}
            </div>
        </div>
    )
}