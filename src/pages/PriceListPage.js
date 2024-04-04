import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { priceList } from "../helpers/PriceList";
import ServiceSection from "../components/section/ServiceSection";
import Lightbox from 'yet-another-react-lightbox';
import Images from '../utils/Images';
import {
    Captions,
    Download,
    Fullscreen,
    Thumbnails,
    Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Master from '../components/master/Master';
import { getAllMasters } from '../utils/api';

const PriceListPage = () => {
    const {id} = useParams();
    const [index, setIndex] = useState(-1);

    const [service, setService] = useState([]);
    const [services, setServices] = useState([]);
    const [masters, setMasters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getAllMasters();
            const finded = data.filter(m=>{
                return m.services.includes(id);
            });
            setMasters(finded);
        } catch (error) {
            console.log(error)
        }
        };

        fetchData();
    }, []);

    useEffect(()=>{
        const finded = priceList.find(i=>i.serviceCode === parseInt(id));
        setService(finded || []);
        setServices(finded?.services || []);
    },[id])

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
                            <ServiceSection key={index} title={s.serviceTitle} services={s.servicePrices || []} />
                        );
                    })}
                </ul>
            </div>
            <div className="gallery">
                <div className="raiting-header">
                    Мастера
                </div>
                { masters.length > 0 ?
                    <ul className="services">
                        {masters.map((master, index)=>{
                            return (
                                <Master key={index} serviceId={id} master={master} />
                            );
                        })}
                    </ul>
                    :
                    <div>К сожалению, пока нет ни одного мастера для данной услуги :(</div>
                }
            </div>
            <div className="gallery">
                <div className="raiting-header">
                    Галлерея
                </div>

                <Images
                    data={service.slides || []}
                    onClick={(currentIndex) => setIndex(currentIndex)}
                />

                <Lightbox
                    plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
                    captions={{
                    showToggle: true,
                    descriptionTextAlign: 'end',
                    }}

                    index={index}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    slides={service.slides}
                />
            </div>
        </main>
     );
}
 
export default PriceListPage;