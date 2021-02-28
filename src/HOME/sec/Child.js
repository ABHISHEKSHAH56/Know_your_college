import React from 'react'

import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Image } from 'semantic-ui-react';
import a from '../img/coco.png';
import b from '../img/info.png';

export default function Child({ item }) {
        return (
                <div>
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
