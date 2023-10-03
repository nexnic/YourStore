import ProductCard from './productcard'

export default function ProductList({items}) {
    
    return (
        <section className='section__product'>
            {items.map((item) => (
                <ProductCard item={item} key={item.id}/>
            ))}
        </section>
    )
}