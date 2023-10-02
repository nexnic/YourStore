
import CheckoutDetailts from './CheckoutDetails'
import CheckoutList from './CheckoutList'

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