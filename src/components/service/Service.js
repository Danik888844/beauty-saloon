import { NavLink } from "react-router-dom";
import "./style.css";

const Service = ({title, img, id}) => {
    return ( 
        /* КОМПОНЕНТ КОТОРЫЙ ОТОБРАЖАЕТСЯ В СПИСКЕ */
        <NavLink to={'/service/' + id}> 
            <li className="service">
                <img src={img} alt={title} className="service__img" />
                <h3 className="service__title">{title}</h3>
            </li>
        </NavLink>
     );
}
 
export default Service;