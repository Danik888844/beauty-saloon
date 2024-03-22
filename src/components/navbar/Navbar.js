import { NavLink } from "react-router-dom";
import "./style.css";
import BtnDarkMode from "../btnDarkMode/btnDarkMode";

const Navbar = () => {
    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    return (
        <nav className="nav">
            <div className="container">
                <NavLink to="/" className="logo">
                    <strong>Marigold</strong> beauty-salon
                </NavLink>

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to="/" className={({isActive})=> isActive ? activeLink : normalLink}>
                            Главная</NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/services" className={({isActive})=> isActive ? activeLink : normalLink}>
                            Прайс-лист услуг</NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/masters" className={({isActive})=> isActive ? activeLink : normalLink}>
                            Мастера</NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/contacts" className={({isActive})=> isActive ? activeLink : normalLink}>
                            Контакты</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;