import { useNavigate } from 'react-router-dom';


export default function Product ({item, onSelectAddCart}) {
    const {id, price, title, imageUrl, description} = item
    const navigate = useNavigate();

    function handlereClick(event, id, item) {
       
        if(event.target.localName === 'button')  onSelectAddCart(item)
        else navigate(`/product/${id}`);
    }
    
    return (
        <div className="card" id={id} onClick={()=> handlereClick(event, id)}>
            <img src={imageUrl} alt={title} className="card__img"/>
            <div className="card__details">
                <h3 className="headline__card">{title}</h3>
                <p>{description}</p>
                <small>{price}</small>
            </div>
            <button onClick={() => handlereClick(event, id, item)}>{price}</button>
        </div>
    )
}