import Header from "../components/header/Header";
import RaitingCard from "../components/raitingCard/RaitingCard";
import { raitings } from "../helpers/RaitingList";
import Carousel from 'react-elastic-carousel';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const Home = () => {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}
    ];

    return ( 
        <>
        <Header />
        <main className="section" style={{paddingBottom: '0px'}}>
            <div className="about">
                <div className="about-left">
                </div>
                <div className="about-right">
                    <p className="about-title">
                        <strong>Салон красоты и эстетики</strong> Marigold
                    </p>
                    <p className="about-text">
                        Marigold – это особое пространство , где о вашей красоте, молодости и здоровье позаботятся настоящие профессионалы своего дела, а доброжелательная атмосфера и высокий уровень сервиса станут неотделимой частью визита к нам.
                    </p>
                    <p className="about-text">
                        Наши клиенты и их потребности, мечты и желания есть основа нашей работы и творчества.
                    </p>
                    <p className="about-text">
                        Нам доверяют! Салон начал свою работу в 2023 г., и уже десятки тысяч довольных клиентов, мы гордимся, что к нашему экспертному мнению прислушиваются целые поколения.
                    </p>
                    <p className="about-text">
                        Наша концепция -это качественные услуги по демократичным ценам. Для вас открыты отделение косметологии, кабинет коррекции фигуры, парикмахерский зал, кабинеты ногтевого сервиса.
                    </p>
                    <p className="about-text">
                        В Marigold используется самое современное высокотехнологичное косметологическое оборудование и препараты, безопасность которых подтверждена регистрационными удостоверениями и сертификатами.
                    </p>
                </div>
            </div>
            <div className="raiting">
                <div className="raiting-header">
                    Отзывы
                </div>
                <div className="raiting-container">
                    <Carousel breakPoints={breakPoints}>
                        {raitings.map((raiting, idx) => {
                            return <RaitingCard key={idx} fullname={raiting.fullname} rate={raiting.rate} desc={raiting.desc} />
                        })}
                    </Carousel>
                </div>
            </div>
            <div className="map" style={{backgroundColor: "transparent"}}>
                <div className="raiting-header">
                    Наше местоположение
                </div>
                <YMaps>
                    <Map width={"100%"} height={"500px"} defaultState={{ center: [43.268895, 76.935985], zoom: 18 }} >
                        <Placemark defaultGeometry={[43.268895, 76.935985]} />
                    </Map>
                </YMaps>
            </div>
        </main>
        </>
     );
}
 
export default Home;