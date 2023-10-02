export default function CheckoutProduct ({item}) {
    console.log(item)
    return (
        <li id={item.id}>
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.name}</h3>
            small
        </li>
    )
}