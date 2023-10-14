// @ts-ignore
export default function ProductImage ({items}) {

    return (
        <div className="productPage__image">
            <img src={items.imageUrl} alt={items.title} className="image__productpage"/>
        </div>
    )
}