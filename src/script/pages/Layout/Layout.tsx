import Header from './Header/Header'
import Footer from './Footer/Footer'
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