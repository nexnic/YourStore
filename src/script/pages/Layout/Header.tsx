import Navigation from "./Navigation"

export default function Header ({pageConfig, cart, onSelectEmptyCart, onSelectCartRemoveItem}) {
    return (
        <header className="header">
            <Navigation pageConfig={pageConfig} cart={cart} onSelectEmptyCart={onSelectEmptyCart} onSelectCartRemoveItem={onSelectCartRemoveItem}/>
        </header>
    )
}