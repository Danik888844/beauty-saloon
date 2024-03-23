import { NavLink } from "react-router-dom";
import useLocalStorage from "../utils/useLocalStorage";

const Login = () => {
    const [storedUserData, setUserData] = useLocalStorage('userData', {});

    return ( 
        <>
            <div className="login-background">
            </div>
            <form className="login-form">
                <h3>Вход в аккаунт</h3>

                <label htmlFor="username">Логин</label>
                <input type="text" placeholder="Email" id="username" />

                <label htmlFor="password">Пароль</label>
                <input type="password" placeholder="Password" id="password" />

                <NavLink to="/register">
                    <span className="to-register">Нет аккаунта? Зарегестрируйтесь!</span>
                </NavLink>

                <button>Войти</button>
            </form>
        </>
    );
}
 
export default Login;