import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div id="services">
       <h1 className="text-center m-5 p-3">Our Services is Here..</h1>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }  
            </div>
        </div>
    );
};

export default Services;