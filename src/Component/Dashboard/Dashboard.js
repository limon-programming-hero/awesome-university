import React, { useEffect, useState } from 'react';
import FakeData from '../FakeData/FakeData'
import { getFromDb, removeFromDb } from '../LocalStorage/LocalStorage';

const Dashboard = () => {
    const dashboardStyle = {
        border: '1px solid gray',
        margin: '5px',
        padding: '5px'
    }
    const buttonStyle = {
        border: '1px solid lightGray',
        padding: '2px',

    }
    const [purchasedCourse, SetPurchasedCourse] = useState([]);

    const storedData = getFromDb();
    const storedId = Object.getOwnPropertyNames(storedData);
    // console.log(storedId);
    useEffect(() => {
        const Courses = storedId.map(idString => {
            const singleCourse = FakeData.find(data => data.id === parseInt(idString));
            singleCourse.quantity = storedData[idString];
            return singleCourse;
        });
        SetPurchasedCourse(Courses);
    }, [storedId]);
    let no ;
    if(storedId.length === 0 ){
        no = <h4 style={{textAlign : 'center'}}>No course selected !</h4>
    }
    console.log(purchasedCourse);
    return (
        <div style={{ margin: '10px', padding: '5px' }}>
            {purchasedCourse.map(course => <li style={dashboardStyle} className='text-success courseList'>{course.service} : {course.quantity} <button style={buttonStyle} className='mx-5' onClick={() => removeFromDb(course.id)}>Remove Quantity</button></li>)}
            {no}
        </div>
    );
};

export default Dashboard;