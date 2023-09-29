import Header from './Header'
import Footer from './Footer'
import { Outlet} from "react-router-dom";


export default function Layout({pageConfig, cartItem}){

    
    return (
       <>
        <Header pageConfig={pageConfig} cartItem={cartItem}/>
        <Outlet/>
        <Footer pageConfig={pageConfig}/>
        
        </>
    )
}