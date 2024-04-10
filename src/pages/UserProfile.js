import { useEffect, useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { changePassword, getAllMasters, getBookingsByEmail } from "../utils/api";
import UserBookings from "../components/userBookings/UserBookings";

const UserProfile = () => {
    const [storedUserData, ,clearUserData] = useLocalStorage('userData', {});
    const isUser = Object.keys(storedUserData).length > 0;
    const navigate = useNavigate();
    
    const [userData, setUserData] = useState({
        email: storedUserData.email,
        currentPassword: '',
        newPassword: ''
      });
    const [message, setMessage] = useState('');

    const [masters, setMasters] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if(!isUser){
            navigate("/login");
            return;
        }

        const fetchData = async () => {
        try {
            const mastersRes = await getAllMasters();
            const bookingsRes = await getBookingsByEmail(storedUserData.email);
            console.log(bookingsRes);
            setMasters(mastersRes);
            setBookings(bookingsRes);
        } catch (error) {
            console.log(error)
        }
        };

        fetchData();
    }, []);


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
            const response = await changePassword(userData);
            console.log(response);
            clearUserData();
        } catch (error) {
            console.error('Ошибка при изменении пароля:', error);
            setMessage('Ошибка при изменении пароля');
        }
    };

    return ( 
        <main className="section">
            <div className="container" style={{flexDirection: "column"}}>
                <div className="main-block">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h3>{storedUserData.fullname}</h3>

                        <label htmlFor="login">Логин</label>
                        <input placeholder="Логин" id="login" disabled value={storedUserData.email} />

                        <label htmlFor="currentPassword">Нынешний пароль</label>
                        <input type="password" placeholder="Нынешний пароль" id="currentPassword" name="currentPassword" required onChange={handleChange} />

                        <label htmlFor="newPassword">Новый пароль</label>
                        <input type="password" placeholder="Новый пароль" id="newPassword" name="newPassword" required onChange={handleChange} />

                        <button className="form-button" type="submit">Изменить пароль</button>
                        <small style={{color: "orange"}}>{message && <p>{message}</p>}</small>
                    </form>
                </div>
                <div className="block">
                    <div className="raiting-header">
                        Ваши записи
                    </div>
                    { bookings.length > 0 ?
                        <ul className="services">
                            {bookings.map((booking, index)=>{
                                const master = masters.find(m => m.id === booking.master)
                                return (
                                    <UserBookings key={index} date={booking.dateTime} masterName={master.fullName} services={booking.services} />
                                );
                            })}
                        </ul>
                        :
                        <div>К сожалению, вы пока не записаны ни на одну услугу :(</div>
                    }
                </div>
            </div>
        </main>
     );
}
 
export default UserProfile;