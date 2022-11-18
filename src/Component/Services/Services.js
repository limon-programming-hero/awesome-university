import React from 'react';
import { useEffect, useState } from 'react';
import Service from '../Service/Service';
import FakeData from './../FakeData/FakeData';

// export const servicesContext = React.createContext();


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        setServices(FakeData)
        // console.log(services)
    }, [services]);

    // console.log(services);
    return (
        <div className='container m-3'>
            <div className="row">
                {services.map(service => <Service key={service.id} serve={service}></Service>)}
            </div>
        </div>
    );
};

export default Services;