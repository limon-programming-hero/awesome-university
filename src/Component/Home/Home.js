import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import About from './../About/About';
import FakeData from './../FakeData/FakeData';

const Home = () => {
    const [service, setService] = useState([]);
    // const url = 'https://api.npoint.io/887976d381b11e5aa919';
    useEffect(() => {
        let shortService = [];
        for (let i = 0; i < 4; i++) {
            shortService.push(FakeData[i])
            setService(shortService);
        }

    }, []);


    // const serveNumber = [1, 2, 3];

    return (
        <div className='container  mt-5'>
            <h3>Our Services:</h3>
            <div className="row">
                {service.map(serve =>
                    <Service key={serve.id} serve={serve}></Service>
                )}
            </div>
            <h3 className=' mt-3'>About us:</h3>
            <About></About>

        </div>
    );
};

export default Home;