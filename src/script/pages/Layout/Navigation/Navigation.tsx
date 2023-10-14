// Import 
    import Cart from "../../../Components/cart";
    import Menu from "./Components/Menu";
    import handlerMenuClick from './Handler/Handler'
    import { useState } from "react";
// @ts-ignore
export default function Navigation({pageConfig, cart, onSelectEmptyCart, onSelectCartRemoveItem}) {
    const [isMenu, setIsMenu] = useState(false)

    return(
        <nav className="navBar">
            <Cart cart={cart} onSelectEmptyCart={onSelectEmptyCart} onSelectCartRemoveItem={onSelectCartRemoveItem}/>
            <h2>{pageConfig[0].CompanyName}</h2>
            <div className="hamburger" onClick={() => handlerMenuClick(isMenu, setIsMenu)}>
                <div className="patty"></div>
                <div className="patty"></div>
                <div className="patty"></div>
            </div>
            {isMenu ? <Menu></Menu> : null}
        </nav>
    )
}



