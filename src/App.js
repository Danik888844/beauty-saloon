import "./styles/main.css";
import sun from "./img/icons/sun.svg";
import moon from "./img/icons/sun.svg";
import vk from "./img/icons/vk.svg";
import instagram from "./img/icons/instagram.svg";
import gitHub from "./img/icons/gitHub.svg";

function App() {
  return (
    <div className="App">

        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Danzel</em></strong><br />
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="#!" className="btn">Download CV</a>
            </div>
        </header>

        <main className="section">
            <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                        </li>
                    </ul>

            </div>
        </main>

        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 danik888844</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
