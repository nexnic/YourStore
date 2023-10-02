import Header from './Header'
import Footer from './Footer'
import { Outlet} from "react-router-dom";


export default function Layout({pageConfig, cart, onSelectCartRemoveItem, onSelectEmptyCart}){

    
    return (
       <>
        <Header pageConfig={pageConfig} cart={cart} onSelectEmptyCart={onSelectEmptyCart} onSelectCartRemoveItem={onSelectCartRemoveItem}/>
        <Outlet/>
        <Footer pageConfig={pageConfig}/>
        
        </>
    )
}