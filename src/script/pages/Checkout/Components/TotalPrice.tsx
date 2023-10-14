export default function TotalPrice({cart}) {


    const totalPrice = cart.reduce((total, product) => {
        const priceToUse = product.price * product.quantity
        return total + priceToUse
    },0 )
 
    const totalDiscount = cart.reduce((total, product) => {
        const discount = (product.price - product.discountedPrice) * product.quantity;
        return total + discount;
    }, 0)

    const totalPriceWithDiscount = cart.reduce((total, product) => {
        const priceToUse =
          product.discountedPrice && product.discountedPrice < product.price
            ? product.discountedPrice
            : product.price;
        return total + priceToUse * product.quantity;
      }, 0);
    
    return (
            <ul className="cardtotal">
                <li className="cardtotal__list">
                    <p>sum:</p>
                    <p>{totalPrice.toFixed(2)} Nok</p>
                </li>
                <li className="cardtotal__list">
                    <p>Total discount:</p>
                    <p>{totalDiscount} Nok</p>
                </li>
                <li className="cardtotal__list">
                    <p>Sum paid now:</p>
                    <p>{totalPriceWithDiscount.toFixed(2)} Nok</p>
                </li>
            </ul>
    )
}