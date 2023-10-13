import { useState } from "react";
import Product from "./Product";
import ShowSearch from './ShowSearch';

export default function Main({products, onSelectAddCart}) {
    
    const [sortBy, setSortBy] = useState('input');
    const [searchTerm, setSearchTerm] = useState('')
    const [searchItem, setSearchItem] = useState([])
    const [searching, setSearching] = useState(false)
  
    let sortedItems

    function handlerSearchInput(e) {
        setSearchTerm(e.target.value)
        const filteredItems = sortedItems.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchItem(filteredItems)
    }




    if(sortBy === 'input') sortedItems = products
    if(sortBy === 'pricelow') sortedItems = products.slice().sort((a, b) => Number(a.price) - Number(b.price))
    if(sortBy === 'pricehigh') sortedItems = products




    return (
        <main className="main">
            <section>
            <div className="nav__filter">
                <input type="text" className="input__search" onChange={handlerSearchInput} onFocus={() =>  setSearching(true)} placeholder="Type to search"/>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select__filter">
                    <option value='input'>Sort By Input order</option>
                    <option value='pricelow'>Price: Low to High</option>
                    <option value='pricehigh'>Price: High to Low</option>
                </select>
                </div>
                
                {searching && <div className="search">{searchItem.map((item) => <ShowSearch item={item} key={item.id} />)}</div>} 
               
                <div className="main__home">
                    {sortedItems.map((item) => <Product item={item} key={item.id} onSelectAddCart={onSelectAddCart}/>)}
                </div>
            </section>
        </main>
    )
}
// {searching && searchItem.map((item) => <ul className="search"><ShowSearch item={item} key={item.id} /></ul>)}