export default function Product ({item, onSelectAddCart}) {
    const {id, price, title, imageUrl, description} = item

    
    return (
        <div className="card" id={id}>
            <img src={imageUrl} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <small>{price}</small>
            </div>
            <button onClick={() => onSelectAddCart(id)}>{price}</button>
        </div>
    )
}