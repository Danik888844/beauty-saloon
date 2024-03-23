import { NavLink } from "react-router-dom";
import "./style.css";

const Service = ({title, img, id}) => {
    return ( 
        /* КОМПОНЕНТ КОТОРЫЙ ОТОБРАЖАЕТСЯ В СПИСКЕ */
        <li className="service">
            <NavLink to={'/service/' + id}> 
                <img src={img} alt={title} className="service__img" />
                <h3 className="service__title">{title}</h3>
            </NavLink>
        </li>
     );
}
 
export default Service;