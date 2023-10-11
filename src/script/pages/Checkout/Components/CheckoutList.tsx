


export default function CheckoutList ({item}) {
    const productPrice = item.price
    const productdiscounted = item.discountedPrice
    const isDiscounted =  productPrice > productdiscounted
    const Hasquantity = item.quantity
    console.log(Hasquantity)

    return (
        <li>
            <img src={item.imageUrl} alt={item.title} className="image__checkout"/>
            <h3>{item.title}</h3>
            {isDiscounted ? <p>{item.discountedPrice} ,-</p> : <p>{items.price}</p>}

        </li>
    )
}