import img from '../../img/logo512.png';
import './style.css';
import { priceList } from '../../helpers/PriceList';

const Master = ({fullName, exp, services}) => {
    const filtered = priceList.map(s => {
        if(services.includes(s.serviceCode))
            return s.title
    }  );
    return ( 
        <li className="master__card">
            <img src={img} alt={fullName} className="master__img" />
            <h3 className="master__title">{fullName}</h3>
            <p>Стаж: {exp}</p>
            <p>Услуги:</p>
            <ul>
              {filtered.map((name, index) => (
                <li key={index}>{name}</li>
                ))}
            </ul>
        </li>
     );
}
 
export default Master;