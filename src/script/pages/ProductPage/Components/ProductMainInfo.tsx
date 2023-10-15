import Button from '../../../Components/Button'
// @ts-ignore
export default function ProductMainInfo({items, onSelectAddCart}){
    console.log(items)
    const productPrice = items.price
    const productdiscounted = items.discountedPrice
   
    const isDiscounted =  productPrice > productdiscounted
    console.log(isDiscounted)

    return (
        <div className='productPage__price'>
            {isDiscounted ? <small>{productdiscounted}</small> : null}
            <p>{productPrice}</p>
            
            <Button Class='btn__buy' Type='button'onClick={()=> onSelectAddCart(items)}>Add to cart</Button>
        </div>
    )
}