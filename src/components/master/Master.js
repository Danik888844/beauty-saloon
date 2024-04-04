import img from '../../img/logo512.png';
import './style.css';
import { priceList } from '../../helpers/PriceList';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Master = ({master}) => {
    const [filteredServices, setFilteredServices] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const filtered = priceList.filter(s => master.services.includes(s.serviceCode));

        setFilteredServices(filtered);
    },[])
    
    return ( 
        <li className="master__card">
            <img src={img} alt={master.fullName} className="master__img" />
            <h3 className="master__title">{master.fullName}</h3>
            <span className="expirience">Стаж в годах - {master.expirience}</span>
            <button onClick={()=>navigate(`/form/${master.id}`)} className="booking-button">Записаться</button>
            <div className='master__service__container'>
                <p className="master__service__title">Услуги</p>
                <ul>
                {filteredServices.map((item, index) => (
                    <li key={index}>
                        <NavLink to={'/service/' + item?.serviceCode}> 
                           {item?.title}
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </div>
        </li>
     );
}
 
export default Master;