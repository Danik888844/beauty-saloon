import { useEffect, useState } from "react";
import "./style.css";
import useLocalStorage from "../../utils/useLocalStorage";

const Header = () => {
    const [storedUserData] = useLocalStorage('userData', {});
    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        if (Object.keys(storedUserData).length > 0) {
            setIsUser(true);
          }
    }, [storedUserData]);

    return ( 
    <header className="header">
        <div className="header__title">
            Красота - залог успеха
        </div>
        <div className="header__text">
            <p>Салон Marigold совсем молодой, но уже готов соревноваться по уровню качества с лучшими салонами красоты </p>
        </div>
        
        <a href={isUser ?  "/form" : "/login"} className="btn-outline">Записаться</a>
    </header>);
}
 
export default Header;