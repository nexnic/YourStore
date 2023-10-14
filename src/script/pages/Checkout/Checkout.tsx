import ProductList from './Components/ProductList'
import CheckoutDetailts from './Components/CheckoutDetails'
// @ts-ignore
export default function CheckoutPage({cart}) {
    
    return (
        <main>
            <section className='checkoutPage'>
                <div className='checkoutPage__container'>
                    <CheckoutDetailts cart={cart} />
                    <div className='checkoutPage__container--product'>
                        <h3>Your goods</h3>
                        <br />
                        
                        {
                            // @ts-ignore
                            cart.map((item) => <ul ><ProductList item={item}/></ul> )
                        }
                    </div>
                </div>
            </section>
        </main>
    )

}