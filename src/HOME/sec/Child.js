import React from 'react'

import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Image } from 'semantic-ui-react';
import a from '../img/coco.png';
import b from '../img/info.png';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

export default function Child({ item }) {
        useEffect(() => {
                Aos.init({duration:2000});
         }, [])
        return (
                <div data-aos="fade-up">
                        <Link to={`/overview/${item.college_id}`}>
                                <Card className="cardk" style={{ width: '18rem', margin: '3px',minHeight: '150px' }}>
                                        <Card.Body>
                                                <Image src={item.logo} style={{ 'marginLeft': '20px'  }} height='100px' />
                                                <Card.Title style={{ 'fontFamily': "Nunito", 'fontWeight': 'bold', color: ' #35404e' }} className="m-2">
                                                        {item.name}
                                                </Card.Title>
                                        </Card.Body>
                                </Card>
                        </Link>
                </div>
        )
}
