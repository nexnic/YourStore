
import CheckoutProduct from "./CheckoutProduct"


export default function CheckoutList ({cart}) {
    return (

        <div className="Order">
            <ul>
            {cart.map((item) => (
                <CheckoutProduct item={item}/>
            ))}
            </ul>
            <div className="summery">
                <table>
                    <tr>
                        <tb>SubTotal </tb>
                        <tb>500 NOK</tb>
                    </tr>
                    <tr>
                        <tb>Shipping </tb>
                        <tb>0 NOk</tb>
                    </tr>
                    <tr>
                        <tb>Total </tb>
                        <tb>500 NOK</tb>
                    </tr>
                </table>
            </div>
        </div>
    )
}