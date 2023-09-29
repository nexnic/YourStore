export default function Card ({storeItem}){
    const {id, imageUrl, title, price} = storeItem


    return (
        <div className="card" id={id}>
            <div className="card__img" style={{backgroundImage:`url("${imageUrl}")`}}></div>
            <div className="card__text">
                <h3>{title}</h3>
                <small>{price}</small>
                <button className="btn__buy" type="button">Buy</button>
            </div>
        </div>
    )
}
