import Navigation from "../Navigation/Navigation"


export default function Header ({pageConfig, cart, onSelectEmptyCart, onSelectCartRemoveItem}) {
    return (
        <header className="header">
            <Navigation pageConfig={pageConfig} cart={cart} onSelectEmptyCart={onSelectEmptyCart} onSelectCartRemoveItem={onSelectCartRemoveItem}/>
            <div className="header__container">
                <h1 className="heading">
                    <span className="heading__main">
                        YourStore
                    </span>
                    <br/>
                    <span className="heading__sub">
                    Your One-Stop Online Shop for All Your Needs.
                    </span>
                </h1>
            </div>
        </header>
    )
}