import Button from "../Components/Button"

export default function ProductCard({item, onSelectAddCart}) {
    const {id, title, imageUrl, price} = item 

    return (
        <div className="card" id={id}>
            <img src={imageUrl} alt={title}/>
            <div className="card__text">
                <h4>{title}</h4>
            </div>
            <div className="card__btn">
                <Button onClick={()=>onSelectAddCart(item)}>{price}</Button>
            </div>
        </div>
    )

}