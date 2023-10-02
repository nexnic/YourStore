// Import 
    // Reach
        import { Link } from "react-router-dom";
import Input from '../Components/Input'
import Cart from "./cart";
import HamburgerMenu from "./hamburgermenu";

export default function Navigation({pageConfig, cart, onSelectEmptyCart, onSelectCartRemoveItem}) {

    const {pageName} = pageConfig
    console.log(pageName)
    return(
        <nav className="navBar">
                <div className="navBar__top">
                    <div>
                        <h1>{pageName}</h1>
                    </div>
                    <div>
                        <Input Class={'navbar__search'} Type={'text'} PlaceHolder={'Search...'}/>
                    </div>
                    <Cart cart={cart} onSelectEmptyCart={onSelectEmptyCart} onSelectCartRemoveItem={onSelectCartRemoveItem}/>
                    <HamburgerMenu />
                </div>
                <div className="navBar__bottom">
                    <ul>
                        <li>
                            <Link to="/" className="link__navbar">Home</Link>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}