import { useState } from "react"
import Button from "../Components/Button"

export default function Cart(){
    const [showCart,setShowCart] = useState(false)


    function handleShowCart () {
        setShowCart((show) => !show)
    }
    

    return (
        <div>
            <Button Class={'btn'} Type={'button'} onClick={handleShowCart}>cart</Button>
            {showCart && <CartOpen/>}
        </div>
    )
}

function CartOpen () {
    return (
        <div className="container">
            <div className="cart">
                <div className="cart__header">
                    <h4>Cart</h4>
                </div>
                <ul className="cart__items">
                    <li>
                        <img/>
                        <span className="item__name">test</span>
                        <span className="item__price">$ 800kr</span>
                        <span className="item__quantity">Quantity: 1</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
