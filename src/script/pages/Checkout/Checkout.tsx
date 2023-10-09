
import CheckoutDetailts from './Components/CheckoutDetails'
import CheckoutList from './Components/CheckoutList'

export default function CheckoutPage({cart}) {

    return (
        <main>
            <section className='Checkout__productList'>
            <CheckoutDetailts/>
            <CheckoutList cart={cart}/> 
            </section>
        </main>
    )

}