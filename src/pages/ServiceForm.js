import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import useLocalStorage from "../utils/useLocalStorage";
import Select from 'react-select';
import { priceList } from "../helpers/PriceList";
import { addBooking, getAllMasters } from "../utils/api";
import 'react-datepicker/dist/react-datepicker.module.css';

const ServiceForm = () => {
    const navigate = useNavigate();
    const [masters, setMasters] = useState([]);

    const {masterId} = useParams();

    const [services, setServices] = useState(priceList.map((s)=>{
        return {
            value: s.serviceCode,
            label: s.title
        }
    }) || []);

    const [storedUserData] = useLocalStorage('userData', {});
    const isUser = Object.keys(storedUserData).length > 0;

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const now = `${day}/${month}/${year}`;

    const calc_date = (time)=>{
        const [day, month, year] = time.split('/');
        const res = new Date(year, month - 1, day);
        console.log(res);
        return res;
    };

    const [userData, setUserData] = useState({
        email: storedUserData?.email,
        dateTime: now,
        services: [],
        master: '',
      });
      const [message, setMessage] = useState('');

      useEffect(()=>{
        if(!isUser){
            navigate("/login");
            return;
        }

        const fetchData = async () => {
            try {
                const data = await getAllMasters();
                setMasters(data.map((m)=>{
                return {
                    value: m,
                    label: m.fullName
                }
                }) || []);

                const res = data.find(m => m.id === parseInt(masterId));
                handleMasters(res ? {value: res, label: res?.fullName} : '');
            } catch (error) {
              console.log(error)
            }
          };
      
          fetchData();
      },[])

    const handleMasters = (choiced) =>{
        setUserData(prevState => ({
            ...prevState,
            master: choiced || null,
            services: []
            }));

        const filtered = choiced?.value ? priceList.filter(s => choiced.value?.services?.includes(s.serviceCode)) : priceList;
        setServices(filtered.map(s=> {
            return {
                value: s.serviceCode,
                label: s.title
            }
        }))
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await addBooking({...userData, 
                master: JSON.stringify(userData.master.value.id),
                services: JSON.stringify(userData.services.map(s=>s.value))});
            console.log(response);
            setMessage('Запись успешно создана!');
        } catch (error) {
            console.error('Ошибка при записи:', error);
            setMessage('Ошибка при записи');
        }
    };

    return ( 
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                <h3>Оформление записи</h3>

                <label htmlFor="dateTime">Время</label>
                <ReactDatePicker required 
                minDate={new Date()}
                selected={calc_date(userData?.dateTime)} 
                id="dateTime" name="dateTime"
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
                <Select required id="masters" name="master" value={userData.master} isClearable options={masters} onChange={handleMasters} />

                <label htmlFor="services">Услуги</label>
                <Select required id="services" name="services" value={userData.services} isMulti options={services} onChange={(choiced)=>{
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