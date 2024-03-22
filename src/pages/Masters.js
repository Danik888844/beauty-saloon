import React, { useEffect, useState } from 'react';
import { getAllMasters } from '../utils/api';
import Master from '../components/master/Master';

const Masters = () => {
    const [masters, setMasters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllMasters();
        setMasters(data);
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, []);

    return ( 
        <main className="section">
            <div className="container" style={{flexDirection: "column"}}>
                <h2 className="services-title">Мастера</h2>
                <ul className="services">
                    {masters.map((master, index)=>{
                        return (
                            <Master key={index} fullName={master.fullName} exp={master.expirience} services={master.services} />
                        );
                    })}
                </ul>
            </div>
        </main>
     );
}
 
export default Masters;