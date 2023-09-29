import Card from './Card';

export default function HomePage({storeItem, onSelectAddCart}) {
  document.title = `yourPAge | Home`
  
  return (
    <main>
        <Card storeItem={storeItem} onSelectAddCart={onSelectAddCart}/>
    </main>
  )
  
}

