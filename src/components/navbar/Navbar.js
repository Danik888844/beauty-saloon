import { NavLink } from "react-router-dom";
import "./style.css";
import useLocalStorage from "../../utils/useLocalStorage";
import { useEffect, useState } from "react";

const Navbar = () => {
    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";
    const [storedUserData, ,clearUserData] = useLocalStorage('userData', {});
    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        if (Object.keys(storedUserData).length > 0) {
            setIsUser(true);
          }
    }, [storedUserData]);

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

                    {isUser ? (
                        <li className="nav-list__item">
                            <button onClick={clearUserData} className={normalLink}>
                                Выход</button>
                        </li>
                    ) 
                    : 
                    (
                    <li className="nav-list__item">
                        <NavLink to="/login" className={({isActive})=> isActive ? activeLink : normalLink}>
                        Войти</NavLink>
                    </li>)}

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