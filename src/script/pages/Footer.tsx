import { Link } from "react-router-dom";

export default function Footer({pageConfig}) {
    const {pageName, pageSlogen } =pageConfig
    return (
            <footer className="footer">
                <div>
                    <h3>{pageName}</h3>
                    <p>{pageSlogen}</p>
                </div>
                <div>
                    <ul>
                        <li>
                            <h4>
                                <Link to="/" className="link__footer">YourName</Link>
                            </h4>
                        </li>
                        <li>
                            <hr />
                        </li>
                        <li>
                            <Link to="/" className="link__footer"> News</Link>
                        </li>
                        <li>
                            <Link to="*" className="link__footer"> Sale</Link>
                        </li>
                    </ul>
                </div>
            </footer>
    )
}