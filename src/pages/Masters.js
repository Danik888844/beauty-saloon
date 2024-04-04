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
                {masters.length > 0 ?
                  <ul className="services">
                      {masters.map((master, index)=>{
                          return (
                              <Master key={index} master={master} />
                          );
                      })}
                  </ul>
                  :
                  <div>К сожалению, пока нет ни одного мастера</div>
                }
            </div>
        </main>
     );
}
 
export default Masters;