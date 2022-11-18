import React from 'react';
import { useParams } from 'react-router-dom';
import FakeData from './../FakeData/FakeData';

// did upto dynamic data 
// now show dynamic data details

const ServiceDetails = () => {
    const style = {
        align: 'center',

    }

    const { courseId } = useParams();
    const id = parseInt(courseId);
    const SingleService = FakeData.find(data => data.id === id);
    console.log(SingleService);
    const { service, body, title } = SingleService;

    return (
        <div className='m-4' style={style}>
            <h4 className='text-center  text-success fw-bold'>{service}</h4>
            <p className="fw-semibold">{title}</p>
            <p>{`${service} ${body}`}</p>
        </div>
    );
};

export default ServiceDetails;