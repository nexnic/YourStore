import ProductList from './Components/ProductList'
import CheckoutDetailts from './Components/CheckoutDetails'
import { useState } from 'react'
import Ordercomplet from './Components/OrderComplet'
// @ts-ignore
export default function CheckoutPage({cart, onSelectEmptyCart, onSelectCartRemoveItem}) {
    const [order, setOrder] = useState(true)
    // @ts-ignore
    function handlerComplet (){
        setOrder(false)
        onSelectEmptyCart()
    }

    return (
        <main>
            {order ? <section className='checkoutPage'>
                <div className='checkoutPage__container'>
                    <CheckoutDetailts cart={cart}  handlerComplet={handlerComplet}/>
                    <div className='checkoutPage__container--product'>
                        <h3>Your goods</h3>
                        <br />
                        
                        {
                            // @ts-ignore
                            <ul >{cart.map((item) => <ProductList item={item} key={item.id} onSelectCartRemoveItem={onSelectCartRemoveItem}/> )}</ul>
                        }
                    </div>
                </div>
            </section>
            : <section className='checkoutPage'>
                    <div className='checkoutPage__container'>
                        <Ordercomplet />
                    </div>
                </section>}
        </main>
    )

}