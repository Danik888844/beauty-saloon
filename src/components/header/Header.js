import "./style.css";

const Header = () => {
    return ( 
    <header className="header">
        <div className="header__title">
            Красота - залог успеха
        </div>
        <div className="header__text">
            <p>Салон Marigold совсем молодой, но уже готов соревноваться по уровню качества с лучшими салонами красоты </p>
        </div>
        <a href="#!" className="btn-outline">Записаться</a>
    </header>);
}
 
export default Header;