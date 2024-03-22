import Service from "../components/service/Service";
import {priceList} from "../helpers/PriceList";
import logo512 from '../img/logo512.png';

const Services = () => {
    return (
        <main className="section">
            <div className="container" style={{flexDirection: "column"}}>
                <h2 className="services-title">Прайс-лист услуг</h2>
                <ul className="services">
                    {priceList.map((service, index)=>{
                        return (
                            <Service key={index} id={index} title={service.title} img={service.slides[0]?.src || logo512} />
                        );
                    })}
                </ul>
            </div>
        </main>
     );
}
 
export default Services;