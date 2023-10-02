import { useState } from "react";

import Button from "../Components/Button";

export default function HamburgerMenu() {
    const [statusMenu, setStatusMenu] = useState(false)

    function handleHamburgerMenu () {
        setStatusMenu( (status) => !status)
    }

    return (
        <div>

            <Button Type={'button'} Class={'btn'} onClick={handleHamburgerMenu}>&#9776;</Button>
            {statusMenu ? <HamburgerOverlay /> : null}
        </div>
    )
}

function HamburgerOverlay () {
    return (
        <div className="">
            
        </div>
    )
}