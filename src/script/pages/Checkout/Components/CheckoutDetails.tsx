export default function CheckoutDetailts () {

    return (
        <div>
            <h1>Checkout</h1>
            <div>
                <h4>Shipping Details</h4>
                <div>
                    <form>
                        <label htmlFor="name"></label>
                        <input type="text" placeholder="name"/>
                        <label htmlFor="adress"></label>
                        <input type="text"  placeholder="adress"/>
                        <select name="" id="">
                            <option value="norway">Norway</option>
                            <option value="sweden">Sweden</option>
                            <option value="Finland">Finland</option>
                            <option value="Danmark">Danmark</option>
                        </select>

                        <label htmlFor=""></label>
                        <input type="number" placeholder="zip-code"/>
                        <label htmlFor=""></label>
                        <input type="text" placeholder="Contry"/>
                        <button onClick={() => ShippingForm(event)}></button>
                    </form>
                </div>
            </div>
            <div>
                <h4>Payment Details</h4>
                <form action="">
                    <label htmlFor="">
                    <input type="text"  placeholder="1111 2222 3333 4444"/>
                    </label>
                    <input type="date" name="" id="" />
                    <label htmlFor="">
                        <input type="text" placeholder="Three digts"/>
                    </label>

                </form>
            </div>
        </div>
    )
}

function ShippingForm (event) {
    event.preventDefault()
    console.log(event)

}