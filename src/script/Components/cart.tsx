import { useState } from "react"
import Button from "./Button"
import { Link } from "react-router-dom"

export default function Cart({cart, onSelectEmptyCart,onSelectCartRemoveItem}){
    const [showCart,setShowCart] = useState(false)
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    console.log('Cart', totalQuantity)
    
    function handleShowCart () {
        setShowCart((show) => !show)
    }
    

    return (
        <div>
            <Button Class={'btn__primary'} Type={'button'} onClick={handleShowCart}><i className="fa-solid fa-cart-shopping"></i> {totalQuantity ? totalQuantity : null}</Button>
            {showCart && <CartOpen cart={cart} onSelectEmptyCart={onSelectEmptyCart} onSelectCartRemoveItem={onSelectCartRemoveItem}/>}
        </div>
    )
}

function CartOpen ({cart, onSelectEmptyCart, onSelectCartRemoveItem}) {
    const cartLen = cart.length 
    const totalPrice = cart.reduce((total, product) => {
        const priceToUse =
          product.discountedPrice && product.discountedPrice < product.price
            ? product.discountedPrice
            : product.price;
        return total + priceToUse * product.quantity;
      }, 0);


    return (
        <div className="container">
            <div className="cart">
                <div className="cart__header">
                    <h4>Cart</h4>
                </div>
                <ul className="cart__items">
                    {cartLen ?  cart.map((item)=> (
                        <CartList item={item} key={item.id} onSelectCartRemoveItem={onSelectCartRemoveItem}/>
                    )): <p>Empty Cart</p> }
                </ul>
                {cartLen ? <div className="cart__price">
                    <small>Price:</small>
                    <small>{totalPrice.toFixed(2)} Nok</small>
                </div> : null}
                <div className="cart__buttom">
                    {cartLen ? <Button onClick={onSelectEmptyCart} Class='btn__cart'>Empty Cart</Button>  : null}
                    {cartLen ? <Link to="/Checkout" className="btn__cart">Checkout</Link> : null}
                </div>
            </div>
        </div>
    )
}

function CartList ({item, onSelectCartRemoveItem}) {
    const {title,imageUrl , quantity,id} = item
    return (
        <li className="cart__item">
            <img src={imageUrl} alt={title} className="image__cart"/>
            <span className="item__name">{title} </span>
            <span className="item__quantity">Quantity: {quantity}</span>
            <Button onClick={() =>onSelectCartRemoveItem(id)} Class='btn__remove'>x</Button>
        </li>
    )
}
