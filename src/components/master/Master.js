import img from '../../img/logo512.png';
import './style.css';
import { priceList } from '../../helpers/PriceList';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Master = ({fullName, exp, services}) => {
    const [filteredServices, setFilteredServices] = useState([]);

    useEffect(()=>{
        const filtered = priceList.filter(s => services.includes(s.serviceCode));

        setFilteredServices(filtered);
        console.log(filtered);
    },[])
    
    return ( 
        <li className="master__card">
            <img src={img} alt={fullName} className="master__img" />
            <h3 className="master__title">{fullName}</h3>
            <span className="expirience">Стаж в годах - {exp}</span>
            <div className='master__service__container'>
                <p className="master__service__title">Услуги</p>
                <ul>
                {filteredServices.map((item, index) => (
                    <li>
                        <NavLink to={'/service/' + item?.serviceCode} key={index}> 
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