import { useEffect, useState } from "react";

import Main from "./Components/Main";
import LoadingScreen from "../../Components/Loading/LoadingScreen";

// @ts-ignore
export default function HomePage({pageConfig, onSelectAddCart}) {
  const [products , setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  document.title = `${pageConfig[0].CompanyName} | Home`;

  useEffect(() => {
    async function getItem() {
      try {
        const response = await fetch('https://api.noroff.dev/api/v1/online-shop')
        const json = await response.json()

        if(response.status === 200){
          setProducts(...[json])
          setIsLoading(false)
        }
        // @ts-ignore
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
      <main className="main">
        <LoadingScreen pageConfig={pageConfig}></LoadingScreen>
      </main>
    )
  }
  return (
    <>
    <Main products={products} onSelectAddCart={onSelectAddCart}/>
    </>
  )
  
}