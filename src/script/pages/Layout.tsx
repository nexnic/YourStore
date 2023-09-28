import Navigation from './Navigation'
import Footer from './Footer'


export default function Layout({pageConfig}){

    
    return (
       <>
        <Navigation pageConfig={pageConfig}/>
        <Footer pageConfig={pageConfig}/>
        </>
    )
}