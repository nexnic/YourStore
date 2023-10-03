import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ProductHeading from "./Components/ProductHeading";
import ProductMainInfo from './Components/ProductMainInfo';
import ProductSpec from './Components/ProductSpec';


export default function ProductPage () {
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
    },[])

    if(isLoading){
        <div>Loading</div>
    }

    return (
        <div>
            <ProductHeading items={items} />
            <ProductMainInfo items={items} />
            <ProductSpec items={items} />
        </div>
    )
}