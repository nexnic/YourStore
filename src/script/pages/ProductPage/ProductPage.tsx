import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ProductHeading from "./Components/ProductHeading";
import ProductImage from './Components/ProductImage';
import ProductMainInfo from './Components/ProductMainInfo';
import ProductSpec from './Components/ProductSpec';


// @ts-ignore
export default function ProductPage ({onSelectAddCart}) {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const {id} = useParams()
    useEffect(()=> {
        async function getProduct() {
            try {
                const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
                const json = await response.json()
                if(response.status === 200) {
                    setItems(...[json])
                    setIsLoading(false)
                }
                if(response.status === 300 && 400) {
                    console.log('error')
                }
            } catch (error) {
                console.log(error)
            }
        }getProduct()
    
    }, [])

    if(isLoading){
        <div>Loading</div>
    }

    return (
        <main className="main">
            <section className="productPage">
                <ProductHeading items={items} />
                <ProductImage items={items} />
                <ProductMainInfo items={items} onSelectAddCart={onSelectAddCart}/>
                <ProductSpec items={items} />
                
            </section>
        </main>
            
    )
}