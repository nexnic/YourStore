import ProductReviews from "./ProductReviews"

// @ts-ignore
export default function ProductSpec({items}) {
    const {description, reviews} = items
    
    return(
        <div className="productPage__spec">
                <div>
                    <h3>Product info</h3>
                    {description}
                </div>
                <div>
                    <h3>Reviews</h3>
                    {reviews ? <ul>{reviews.map((review) => <ProductReviews review={review} key={review.id}/> )} </ul> : <p> No Review</p>}
                </div>
        </div>
    )
}