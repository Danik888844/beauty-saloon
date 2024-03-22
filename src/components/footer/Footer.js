import "./style.css";
import logo from "./../../img/icons/logo192.png";
import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
    return ( 
    <footer className="footer">
        <div className="container">
            <div className="footer__left">
                <div className="footer__logo">
                    <img src={logo} alt="" style={{width: '20%'}} />
                    <strong style={{paddingLeft: '10px'}}>Marigold</strong> beauty-salon
                </div>
                <ul className="social">
                    <li className="social__item">
                        <a href="mailto:%danik888844@gmail.com">
                            <span className="text__link">danik888844@gmail.com</span>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="tel:%+77471836590">
                            <span className="text__link">+7 (747) 183-65-90</span>
                        </a>
                    </li>
                </ul>
                <div className="copyright">
                    <p>©2024 OOO "Marigold"</p>
                </div>
            </div>
            <div className="footer__right">
                <ul className="social">
                    <li className="social__item">
                        <a href="https://vk.com/dan4ik_za_devan4ik">
                            <img src={vk} alt="Link" />
                            <span className="text__link">@dan4ik_za_devan4ik</span>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://www.instagram.com/daniil_ugreninov">
                            <img src={instagram} alt="Link" />
                            <span className="text__link">@daniil_ugreninov</span>
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="https://github.com/Danik888844">
                            <img src={gitHub} alt="Link" />
                            <span className="text__link">github.com/Danik888844</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer> );
}
 
export default Footer;