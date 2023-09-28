// Import 
    // Reach
        import { Link } from "react-router-dom";
import Input from '../Components/Input'


export default function Navigation({pageConfig}) {

    const {pageName} = pageConfig
    console.log(pageName)
    return(
        <div className="navBar">
                <div className="navBar__top">
                    <div>
                        <h1>{pageName}</h1>
                    </div>
                    <div>
                        <Input Class={'navbar__search'} Type={'text'} PlaceHolder={'Search...'}/>
                    </div>
                    <div>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                <div className="navBar__bottom">
                    <ul>
                        <li>
                            <Link to="/" className="link__navbar">Home</Link>
                        </li>
                    </ul>
                </div>
        </div>
    )
}