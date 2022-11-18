import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './footer.css'

const Footer = () => {
    return (
        <Card.Body className='text-center footer-card'>
            <Button className='text-center' variant="primary">contact us</Button>
            <br />
            <small >© 2022 Copyright: programming hero.com</small>
        </Card.Body>
    );
};

export default Footer;