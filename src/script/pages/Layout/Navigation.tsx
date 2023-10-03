// Import 
    // Reach
        import { Link } from "react-router-dom";
import Input from '../../Components/Input'
import Cart from "../../Components/cart";
import HamburgerMenu from "../../Components/hamburgermenu";

export default function Navigation({pageConfig, cart, onSelectEmptyCart, onSelectCartRemoveItem}) {

    const {pageName} = pageConfig
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
                        <li>
                            <Link to="/checkout" className="link__navbar">Checkout</Link>
                        </li>
                        <li>
                        <Link to="/Aboutus" className="link__navbar">About Use</Link>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}