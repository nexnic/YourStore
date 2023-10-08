import { useEffect, useState } from "react";
import LoadingScreen from '../../Components/LoadingScreen'
import Main from "./Components/Main";


export default function HomePage({onSelectAddCart}) {
  const [products , setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    async function getItem() {
      try {
        const response = await fetch('https://api.noroff.dev/api/v1/online-shop')
        const json = await response.json()

        if(response.status === 200){
          setProducts(...[json])
          setIsLoading(false)
        }
        if(response.status === 300 >= 400){
          console.log('fail')
        }

        
      } catch (error) {
        console.log(error)
      }
    }
    getItem() 
  }, [])

  


  if(isLoading) {
    return (
      <main>
        <LoadingScreen></LoadingScreen>
      </main>
    )
  }
  return (
    <>
    <Main products={products} key={products.id} onSelectAddCart={onSelectAddCart}/>
    </>
  )
  
}

