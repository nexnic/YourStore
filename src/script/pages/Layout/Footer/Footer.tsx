import { Link } from "react-router-dom";


export default function Footer({pageConfig}) {

    return (
            <footer className="footer">
                <div className="footer__name">
                    <h3 className="headline__footer">{pageConfig[0].CompanyName}</h3>
                    <small>{pageConfig[0].CompanySlogen}</small>
                </div>
                <ul className="footer__pages">
                    <li>
                        <h3 className="headline__footer">Pages</h3>
                    </li>
                    <li>
                        <Link to="/" className="link__footer">Home</Link>
                    </li>
                    <li>
                        <Link to="/ContactUs" className="link__footer">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Aboutus" className="link__footer">About</Link>
                    </li>
                </ul>
                <ul className="footer__info">
                    <li>
                        <h3 className="headline__footer">About</h3>
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