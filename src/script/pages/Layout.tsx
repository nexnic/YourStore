import Header from './Header'
import Footer from './Footer'


export default function Layout({pageConfig}){

    return (
       <>
        <Header pageConfig={pageConfig}/>
        <Footer pageConfig={pageConfig}/>
        </>
    )
}