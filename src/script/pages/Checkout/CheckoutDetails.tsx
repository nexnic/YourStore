export default function CheckoutDetailts () {
    return (
        <div>
            <h1>Checkout</h1>
            <div>
                <h4>Shipping Details</h4>
                <div>
                    <table>
                        <tr>
                            <tb>Name</tb>
                            <tb> Jan Andresen</tb>
                        </tr>
                        <tr>
                            <tb>Email</tb>
                            <tb> exemple@outlook.com</tb>
                        </tr>
                        <tr>
                            <tb>Address</tb>
                            <tb> kinggardroud</tb>
                        </tr>
                        <tr>
                            <tb>city</tb>
                            <tb> Oslo</tb>
                        </tr>
                        <tr>
                            <tb>Zip Code</tb>
                            <tb>3060</tb>
                        </tr>
                    </table>
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