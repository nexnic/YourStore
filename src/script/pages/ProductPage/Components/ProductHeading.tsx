export default function ProductHeading ({items}) {

    return (
        <div>
            <h1>{items.title}</h1>
            <p>{items.description}</p>
            <img src={items.imageUrl} alt={items.title}/>
        </div>
    )
}