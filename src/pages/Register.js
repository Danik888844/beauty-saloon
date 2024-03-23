import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../utils/api";
import useLocalStorage from "../utils/useLocalStorage";

const Register = () => {

    const navigate = useNavigate();
    const [storedUserData] = useLocalStorage('userData', {});
    const isUser = Object.keys(storedUserData).length > 0;

    const [userData, setUserData] = useState({
        fullname: '',
        number: '',
        email: '',
        password: ''
      });
      const [message, setMessage] = useState('');

      useEffect(()=>{
        if(isUser){
            navigate("/");
        }
      },[])
    
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
            const response = await registerUser(userData);
            console.log(response);
            navigate("/login");
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
                <h3>Регистрация аккаунта</h3>

                <label htmlFor="fullname">Ф.И.О.</label>
                <input type="text" placeholder="Ф.И.О." id="fullname" name="fullname"  onChange={handleChange} />

                <label htmlFor="number">Номер телефона</label>
                <input type="tel" id="number" name="number" placeholder="87471234567" pattern="[0-9]{11}" required  onChange={handleChange} />

                <label htmlFor="username">Логин</label>
                <input type="text" placeholder="Email" id="username" name="email" onChange={handleChange} />

                <label htmlFor="password">Пароль</label>
                <input type="password" placeholder="Password" id="password" name="password"  onChange={handleChange}/>

                <NavLink to="/login">
                    <span className="to-register">Уже есть аккаунт?</span>
                </NavLink>

                <button type="submit">Зарегестрироваться</button>
                <small style={{color: "orange"}}>{message && <p>{message}</p>}</small>
            </form>
        </>
    );
}
 
export default Register;