import Button from '../../../Components/Button'

export default function ProductMainInfo({items}){
    console.log(items)
    const productPrice = items.price
    const productdiscounted = items.discountedPrice
   
    const isDiscounted =  productPrice > productdiscounted
    console.log(isDiscounted)

    return (
        <div>
            {isDiscounted ? <small>{productdiscounted}</small> : null}
            <p>{productPrice}</p>

            <Button Class='btn__buy' Type={'button'}>Add to cart</Button>
        </div>
    )
}