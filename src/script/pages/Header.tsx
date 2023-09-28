import Navigation from "./Navigation"

export default function Header ({pageConfig}) {

    return (
        <header className="header">
            <Navigation pageConfig={pageConfig}/>
        </header>
    )
}