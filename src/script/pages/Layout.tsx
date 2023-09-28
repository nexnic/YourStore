import Header from './Header'
import Footer from './Footer'
import { Outlet} from "react-router-dom";


export default function Layout({pageConfig}){

    
    return (
       <>
        <Header pageConfig={pageConfig}/>
        <Outlet/>
        <Footer pageConfig={pageConfig}/>
        
        </>
    )
}