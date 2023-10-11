export default function ProductHeading ({items}) {

    return (
        <div className="productPage__heading">
                <h2>{items.title}</h2>
                <p>{items.description}</p>
                <small>Item number: {items.id}</small>
        </div>
    )
}