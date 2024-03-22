import { useParams } from "react-router-dom";
import { priceList } from "../helpers/PriceList";
import ServiceSection from "../components/section/ServiceSection";

const PriceListPage = () => {
    const {id} = useParams();
    const service = priceList[id];
    const services = priceList[id].services
    console.log(services)
    return ( 
        <main className="section">
            <div className="service-details">
                <h1 className="services-title">
                    {service.title}
                    <span style={{display: 'flex', justifyContent: 'end', alignItems:'end', color: 'gray', fontSize: '14px'}}>
                        Код услуги: {service.serviceCode}</span>
                </h1>

                <ul className="services">
                    {services.map((s, index)=>{
                        return (
                            <ServiceSection key={index} title={s.serviceTitle} code={s.serviceCode} services={s.servicePrices || []} />
                        );
                    })}
                </ul>
            </div>
        </main>
     );
}
 
export default PriceListPage;