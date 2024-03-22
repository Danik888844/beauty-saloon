import Service from "../components/service/Service";
import {priceList} from "../helpers/PriceList";

const Services = () => {
    return (
        <main className="section">
            <div className="container" style={{flexDirection: "column"}}>
                <h2 className="services-title">Прайс-лист услуг</h2>
                <ul className="services">
                    {priceList.map((service, index)=>{
                        return (
                            <Service key={index} id={index} title={service.title} img={service.img} />
                        );
                    })}
                </ul>
            </div>
        </main>
     );
}
 
export default Services;