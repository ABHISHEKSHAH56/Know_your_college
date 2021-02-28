import React, { useEffect } from 'react'
import { Card, Container } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import axios from 'axios';
import Child from './Child';
import Loader from '../extra/Loader';

export default function Landingpage() {

        


        const posts = useSelector((state) => state.shop.college);
        console.log(posts)
        return (
                <div>
                        <Container>
                                <div className="header">
                                        <h1>Lorem ipsum dolor sit amet.</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius obcaecati, quibusdam eaque deserunt animi quos quo! Eaque, qui modi!</p>
                                </div>
                                <div className="search">

                                </div>

                        </Container>

                        <Container className="d-flex service flex-row flex-wrap justify-content-center" style={{ 'minHeight': '50vh' }}>
                                {
                                       posts?
                                       posts.map((item) => (

                                                <Child key={item._id} item={item} />

                                        )) : <Loader />
                                }



                                </Container>




                </div>
        )
}
