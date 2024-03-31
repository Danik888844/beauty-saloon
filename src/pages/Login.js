import { NavLink, useNavigate } from "react-router-dom";
import useLocalStorage from "../utils/useLocalStorage";
import { useState } from "react";
import { loginUser } from "../utils/api";

const Login = () => {
    const [storedUserData, setStoreUserData] = useLocalStorage('userData', {});
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: '',
        password: ''
      });
      const [message, setMessage] = useState('');

      const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevState => ({
          ...prevState,
          [name]: value
        }));
        console.log(userData);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser(userData);
            setStoreUserData(response.user);
            console.log(response);
            navigate("/");
            window.location.reload();
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
            setMessage('Ошибка при регистрации');
        }
    };

    return ( 
        <>
            <div className="login-background">
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h3>Вход в аккаунт</h3>

                <label htmlFor="username">Логин</label>
                <input type="text" placeholder="Email" id="username" name="email" onChange={handleChange} />

                <label htmlFor="password">Пароль</label>
                <input type="password" placeholder="Password" id="password" name="password" onChange={handleChange} />

                <NavLink to="/register">
                    <span className="to-register">Нет аккаунта? Зарегестрируйтесь!</span>
                </NavLink>

                <button className="form-button" type="submit">Войти</button>
                <small style={{color: "orange"}}>{message && <p>{message}</p>}</small>
            </form>
        </>
    );
}
 
export default Login;