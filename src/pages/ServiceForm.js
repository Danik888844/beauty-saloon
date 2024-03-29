import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import useLocalStorage from "../utils/useLocalStorage";
import Select from 'react-select';
import { priceList } from "../helpers/PriceList";
import { getAllMasters } from "../utils/api";
import 'react-datepicker/dist/react-datepicker.module.css';

const ServiceForm = () => {

    const navigate = useNavigate();
    const services = priceList.map((s)=>{
        return {
            value: s.serviceCode,
            label: s.title
        }
    }) || [];
    const [masters, setMasters] = useState([]);

    const [storedUserData] = useLocalStorage('userData', {});
    const isUser = Object.keys(storedUserData).length > 0;

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const now = `${day}/${month}/${year}`;

    const calc_date = ()=>{
        const [day, month, year] = userData?.dateTime.split('/');
        const res = new Date(year, month - 1, day);
        console.log(res);
        return res;
    };

    const [userData, setUserData] = useState({
        fullname: storedUserData?.fullname,
        phoneNumber: storedUserData?.number,
        dateTime: now,
        services: [],
        master: '',
      });
      const [message, setMessage] = useState('');

      useEffect(()=>{
        if(isUser){
            navigate("/");
            return 0;
        }

        const fetchData = async () => {
            try {
              const data = await getAllMasters();
              setMasters(data);
            } catch (error) {
              console.log(error)
            }
          };
      
          fetchData();
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
            //const response = await registerUser(userData);
            console.log("response");
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
            setMessage('Ошибка при регистрации');
        }
    };

    return ( 
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                <h3>Оформление записи</h3>

                <label htmlFor="dateTime">Время</label>
                <ReactDatePicker required 
                selected={calc_date()} 
                id="dateTime" 
                onChange={(choiced)=>{
                        if(choiced){
                            setUserData(prevState => ({
                                ...prevState,
                                dateTime: `${choiced.getDate()}/${choiced.getMonth()+1}/${choiced.getFullYear()}`
                              }));
                        }
                    }
                } dateFormat='dd/MM/yyyy' />

                <label htmlFor="masters">Мастер</label>
                <Select required id="masters" name="master" options={masters} onChange={handleChange} />

                <label htmlFor="services">Услуги</label>
                <Select required id="services" isMulti options={services} onChange={(choiced)=>{
                    setUserData(prevState => ({
                        ...prevState,
                        services: choiced
                      }));
                }} />

                <button className="form-button" type="submit">Записаться</button>
                <small style={{color: "orange"}}>{message && <p>{message}</p>}</small>
            </form>
        </>
     );
}
 
export default ServiceForm;