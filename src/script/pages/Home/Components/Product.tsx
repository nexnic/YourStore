import { useNavigate } from 'react-router-dom';


export default function Product ({item, onSelectAddCart}) {
    const {id, price, title, imageUrl, description, discountedPrice} = item
    const isOnSale = price > discountedPrice
    const discountedProsent = ((1 - discountedPrice / price) * 100).toFixed(0)
    const navigate = useNavigate();



    function handlereClick(event, id, item) {
       
        if(event.target.localName === 'button')  onSelectAddCart(item)
        else navigate(`/product/${id}`);
    }
    
    return (
        <div className="card" id={id} onClick={()=> handlereClick(event, id)}>
            <img src={imageUrl} alt={title} className="card__img"/>
            {isOnSale ? <div className='card__sale'>{discountedProsent} %</div> : null}
            <div className="card__details">
                <h3 className="headline__card">{title}</h3>
                <p>{description}</p>
                {isOnSale ?  <small><span>{discountedPrice}</span> <span>{price}</span></small>: <small>{price}</small>}
            </div>
            <button onClick={() => handlereClick(event, id, item)} className='btn__buy'>{price}</button>
        </div>
    )
}