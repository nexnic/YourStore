import { useState } from "react"
import Button from "../Components/Button"

export default function Cart({cart, onSelectEmptyCart,onSelectCartRemoveItem}){
    const [showCart,setShowCart] = useState(false)
    console.log(cart)

    function handleShowCart () {
        setShowCart((show) => !show)
    }
    

    return (
        <div>
            <Button Class={'btn'} Type={'button'} onClick={handleShowCart}>cart</Button>
            {showCart && <CartOpen cart={cart} onSelectEmptyCart={onSelectEmptyCart} onSelectCartRemoveItem={onSelectCartRemoveItem}/>}
        </div>
    )
}

function CartOpen ({cart, onSelectEmptyCart, onSelectCartRemoveItem}) {
    return (
        <div className="container">
            <div className="cart">
                <div className="cart__header">
                    <h4>Cart</h4>
                </div>
                <ul className="cart__items">
                    {cart.map((item)=> (
                        <CartList item={item} key={item.id} onSelectCartRemoveItem={onSelectCartRemoveItem}/>
                    ))}
                </ul>
                <div className="cart__buttom">
                    <Button onClick={onSelectEmptyCart}>Empty Cart</Button>
                </div>
            </div>
        </div>
    )
}

function CartList ({item, onSelectCartRemoveItem}) {
    const {title,imageUrl ,price, quantity,id} = item
    return (
        <li>
            <img src={imageUrl} alt={title}/>
            <span className="item__name">{title}</span>
            <span className="item__price">{price}</span>
            <span className="item__quantity">Quantity: {quantity}</span>
            <Button onClick={onSelectCartRemoveItem(id)}>x</Button>
        </li>
    )
}
