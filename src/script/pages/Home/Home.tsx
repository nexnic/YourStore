import ProductList from '../../Components/ProductList'

export default function HomePage({storeItem, onSelectAddCart}) {
  document.title = `yourPAge | Home`
  
  return (
    <main>
        <ProductList storeItem={storeItem} onSelectAddCart={onSelectAddCart}/>
    </main>
  )
  
}
