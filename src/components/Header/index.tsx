import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">
                    <h1>MeuSite</h1>
                </Link>
            </nav>
        </header>
    );
}