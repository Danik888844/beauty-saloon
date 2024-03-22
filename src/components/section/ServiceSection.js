import './style.css';

const ServiceSection = ({title, services}) => {
    return ( 
        <li className="service-section">
            <div className="section-title">
                {title}
            </div>
            <div>
                {services.map((s,index)=>{
                    return ( 
                        <div key={index} className="section-info">
                            <div className="section-item-left">
                                {s.name}
                            </div>
                            <div className="section-item-right">
                                {s.price}
                            </div>
                        </div>
                    );
                })}
            </div>
        </li>
     );
}
 
export default ServiceSection;