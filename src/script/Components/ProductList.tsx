import ProductCard from './productcard'

export default function ProductList({items, onSelectAddCart}) {
    
    return (
        <section className='section__product'>
            {items.map((item) => (
                <ProductCard item={item} key={item.id} onSelectAddCart={onSelectAddCart}/>
            ))}
        </section>
    )
}