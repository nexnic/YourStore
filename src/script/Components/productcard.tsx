import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function ProductCard({item, onSelectAddCart}) {
    const {id, title, imageUrl} = item 
    const navigate = useNavigate()

    function handlereClick(event) {
        if(event.target.localName === 'button')  onSelectAddCart(item)
        else navigate(`/product/${id}`)

    }

    return (
        <div className="card" id={id} onClick={()=> handlereClick(event)}>
            <img src={imageUrl} alt={title}/>
            <div className="card__text">
                <h4>{title}</h4>
            </div>
            <div className="card__btn">
                <Button onClick={() =>handlereClick(event)}>{item.price}</Button>
            </div>
        </div>
    )

}

