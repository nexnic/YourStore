import { Link } from "react-router-dom";


export default function Footer({pageConfig}) {

    return (
            <footer className="footer">
                <div className="footer__name">
                    <h3>{pageConfig[0].CompanyName}</h3>
                    <p>{pageConfig[0].CompanySlogen}</p>
                </div>
                <ul className="footer__pages">
                    <li>
                        <h3>Pages</h3>
                    </li>
                    <li>
                        <Link to="/" className="link__footer">Home</Link>
                    </li>
                    <li>
                        <Link to="/ContactUs" className="link__footer">Contact Us</Link>
                    </li>
                    <li>
                    <Link to="/Aboutus" className="link__footer">Home</Link>
                    </li>
                </ul>
                <ul className="footer__info">
                    <li>
                        <h3>About {pageConfig[0].CompanyName}</h3>
                    </li>
                    <li>
                        <small>{pageConfig[0].email}</small>
                    </li>
                    <li>
                        <small>{pageConfig[0].telefon}</small>
                    </li>
                </ul>
            </footer>
    )
}