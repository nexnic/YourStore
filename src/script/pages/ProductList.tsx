import ProductCard from './productcard'

export default function ProductList({storeItem, onSelectAddCart}) {
    
    return (
        <section className='section__product'>
            {storeItem.map((item) => (
                <ProductCard item={item} key={item.id} onSelectAddCart={onSelectAddCart}/>
            ))}
        </section>
    )
}