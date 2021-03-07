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
                        <Container >
                                <div className="header">
                                        <h1 style={{display:'block', 'box-shadow': '0px 0px 5px .02px black',  'background':'#ffff'}}>Delhi university</h1>
                                        </div>
                                <div className="search">

                                </div>

                        </Container>

                        <Container className="d-flex  sec service flex-row flex-wrap justify-content-center"  style={{ 'minHeight': '50vh'}}>
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
