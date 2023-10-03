export default function ProductHeading ({items}) {

    return (
        <div>
            <div>
                <h2>{items.title}</h2>
                <p>{items.description}</p>
                <small>Item number: {items.id}</small>
            </div>
           
            <img src={items.imageUrl} alt={items.title}/>
        </div>
    )
}