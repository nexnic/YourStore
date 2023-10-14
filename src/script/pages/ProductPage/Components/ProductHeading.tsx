// @ts-ignore
export default function ProductHeading ({items}) {
    const {title, description, id} = items
    return (
        <div className="productPage__heading">
                <h2>{title}</h2>
                <p>{description}</p>
                <small>Item number: {id}</small>
        </div>
    )
}