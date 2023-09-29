import Card from './Card';

export default function HomePage({storeItem}) {
  document.title = `yourPAge | Home`
  
  return (
    <main>
        <Card storeItem={storeItem}/>
    </main>
  )
  
}

