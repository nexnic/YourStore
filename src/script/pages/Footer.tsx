import { Link } from "react-router-dom";

export default function Footer() {
    return (
            <footer className="footer">
                <div>
                    <h3>YourName</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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