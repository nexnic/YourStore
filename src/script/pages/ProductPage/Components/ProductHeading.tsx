// @ts-ignore
export default function ProductHeading ({items}) {
    const {title, description, id, rating} = items
    const maxRating = 5;
    const activeRating = rating
    

    return (
        <div className="productPage__heading">
                <h2>{title}</h2>
                <p>{description}</p>
                <small>Item number: {id}</small>
                <p>
                    {[...new Array(maxRating)].map((arr , index)=> {
                        return index < activeRating ? <i className="fa-star fa-solid" style={{color: '#DF4C73'}}></i> : <i className="fa-star fa-solid" style={{color: '#B3B3B3'}}></i>
                    })}
                </p>
        </div>
    )
}