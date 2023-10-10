import { Link } from "react-router-dom";

export default function Menu() {
   return (
    <div className="menu">
        <ul className="menu__list">
            <li className="menu__item">
                <Link to="/" className="link__navbar">Home</Link>
            </li>
            <li className="menu__item">
                <Link to="/Aboutus" className="link__navbar">About Use</Link>
            </li>
            <li className="menu__item">
                <Link to='/ContactUs' className="link__navbar">Contact Us</Link>
            </li>
        </ul>
    </div>
   )
}

/*

            
            
*/