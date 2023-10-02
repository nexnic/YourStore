import Navigation from "./Navigation"

export default function Header ({pageConfig, cart, onSelectEmptyCart, onSelectCartRemoveItem}) {
    console.log(cart)
    return (
        <header className="header">
            <Navigation pageConfig={pageConfig} cart={cart} onSelectEmptyCart={onSelectEmptyCart} onSelectCartRemoveItem={onSelectCartRemoveItem}/>
        </header>
    )
}