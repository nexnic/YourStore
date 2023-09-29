import { useState } from "react"
import Button from "../Components/Button"

export default function Cart({cart}){
    const [showCart,setShowCart] = useState(false)
    console.log(cart)

    function handleShowCart () {
        setShowCart((show) => !show)
    }
    

    return (
        <div>
            <Button Class={'btn'} Type={'button'} onClick={handleShowCart}>cart</Button>
            {showCart && <CartOpen cart={cart}/>}
        </div>
    )
}

function CartOpen ({cart}) {
    return (
        <div className="container">
            <div className="cart">
                <div className="cart__header">
                    <h4>Cart</h4>
                </div>
                <ul className="cart__items">
                    {cart.map((item)=> (
                        <CartList item={item} key={item.id}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function CartList ({item}) {
    const {title,imageUrl ,price, quantity} = item
    console.log(item.title)
    return (
        <li>
            <img src={imageUrl} alt={title}/>
            <span className="item__name">{title}</span>
            <span className="item__price">{price}</span>
            <span className="item__quantity">Quantity: {quantity}</span>
        </li>
    )
}
