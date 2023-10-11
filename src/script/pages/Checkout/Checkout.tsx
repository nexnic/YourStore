
import CheckoutDetailts from './Components/CheckoutDetails'
import CheckoutList from './Components/CheckoutList'

export default function CheckoutPage({cart}) {
    console.log(cart)
    return (
        <main>
            <section className='checkoutPage'>
            <CheckoutDetailts/>
                <ul className='checkoutPage__product'>
                    {cart.map(item => <CheckoutList item={item}/>)}
                </ul>
            </section>
        </main>
    )

}