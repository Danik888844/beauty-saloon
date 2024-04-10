import { priceList } from '../../helpers/PriceList';
import { useEffect, useState } from 'react';

const UserBookings = ({date, masterName, services}) => {
    const [filteredServices, setFilteredServices] = useState([]);

    useEffect(()=>{
        const filtered = priceList.filter(s => services.includes(s.serviceCode));

        setFilteredServices(filtered);
    },[])
    
    return ( 
        <li className="master__card">
            <label>{date}</label>
            <br/>
            <label>Мастер: {masterName}</label>
            <div className='master__service__container'>
                <p className="master__service__title">Услуги</p>
                <ul>
                {filteredServices.map((item, index) => (
                    <li key={index}>
                           {item?.title}
                    </li>
                    ))}
                </ul>
            </div>
        </li>
     );
}
 
export default UserBookings;