

export default function ProductSpec({items}) {

    
    return(
        <div className="productPage__spec">
                <div>
                    <h3>Product info</h3>
                </div>
                <div>
                    {items.description}
                </div>
        </div>
    )
}