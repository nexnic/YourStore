import Header from './Header'
import Footer from './Footer'
import { Outlet} from "react-router-dom";


export default function Layout({pageConfig, cart}){

    
    return (
       <>
        <Header pageConfig={pageConfig} cart={cart}/>
        <Outlet/>
        <Footer pageConfig={pageConfig}/>
        
        </>
    )
}