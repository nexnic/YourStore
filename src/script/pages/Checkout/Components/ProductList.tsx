// @ts-ignore
export default function ProductList({item, onSelectCartRemoveItem}) {
    
    const {id, imageUrl,  title, description , quantity, price, discountedPrice} = item
    const isOnSale = price > discountedPrice
    return(
        <li id={id} className="cardCheckout">
            <div className="cardCheckout__img">
            <img src={imageUrl} alt={title} className="image__checkout"/>
            </div>
            <div className="cardCheckout__info">
                <h4>{title}</h4>
                <small>{description}</small>
            </div>
            <div className="cardCheckout__amount">
                <small>Quantity {quantity} </small> 
                {isOnSale ?  <small>per piece {discountedPrice} ,- </small>: <small>per piece {price} ,-</small>}
            </div>
            <div className="cardCheckout__button">
                <button className="btn__remove" onClick={()=> onSelectCartRemoveItem (id)}>X</button>
            </div>
        </li>
    )
}