import React from 'react';
import { Link } from 'react-router-dom';
import { addToDb } from '../LocalStorage/LocalStorage';

import './service.css';

const Service = (props) => {
    const { id, service, img, body } = props.serve;


    return (
        <div className='serviceCard '>
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div className='serviceText'>
                <h4><Link className='text-success' style={{ textDecoration: 'none' }} to={'/service/' + id}>{service}</Link></h4>
                <p>{`${service} ${body}`}</p>
                <button onClick={() => addToDb(id)} className=' dashboardButton'>Add to Dashboard</button>
            </div>

        </div >
    );
};

export default Service;