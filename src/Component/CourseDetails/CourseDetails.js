import React from 'react';

const CourseDetails = (props) => {
    const {service} = props.details;
    return (
        <div>
            <h5>{service}</h5>
        </div>
    );
};

export default CourseDetails;