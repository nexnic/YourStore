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
        <main>
            <div>
                <input type="text" onChange={handlerSearchInput} onFocus={() =>  setSearching(true)} onBlur={() => setSearching(false)}placeholder="Type to search"/>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value='input'>Sort By Input order</option>
                    <option value='pricelow'>Price: Low to High</option>
                    <option value='pricehigh'>Price: High to Low</option>
                </select>
            </div>
            {searching && searchItem.map((item) => <ShowSearch item={item} key={item.id} /> )}
            <div>
                {sortedItems.map((item) => <Product item={item} key={item.id} onSelectAddCart={onSelectAddCart}/>)}
            </div>
        </main>
    )
}