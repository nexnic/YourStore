// @ts-ignore
export default function ProductReviews({review}) {
    console.log(review)
    const {id, username, description, rating} = review
    const maxRating = 5;
    const activeRating = rating
    return (
       <li id={id}>
            <img src="https://i.pravatar.cc/48" alt={username} />
            <div>
                <h4>{username}</h4>
                <p>{description}</p>
                {
                    // @ts-ignore
                    [...new Array(maxRating)].map((arr , index)=> {
                        return index < activeRating ? <i className="fa-star fa-solid" style={{color: '#DF4C73'}}></i> : <i className="fa-star fa-solid" style={{color: '#B3B3B3'}}></i>
                    })}
            </div>

       </li>
    )
}