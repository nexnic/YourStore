import Navigation from "./Navigation"

export default function Header ({pageConfig, cart}) {
    console.log(cart)
    return (
        <header className="header">
            <Navigation pageConfig={pageConfig} cart={cart}/>
        </header>
    )
}