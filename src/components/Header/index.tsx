import { Link, NavLink } from 'react-router-dom';
import './style.css';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">
                    <h1>MeuSite</h1>
                </Link>
                <div className="rm-container-links ">
                    {/* nav-orange and nav-white são propriedades CSS, isActive is a boolean method NavLink */}
                    <NavLink className={({ isActive }) => isActive ? "nav-orange menu-active" : "nav-white"}
                        to="/initial">
                        Início
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav-orange menu-active" : "nav-white"}
                        to="/promotion">
                        Promoção
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav-orange menu-active" : "nav-white"}
                        to="/signup">
                        Participar
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}