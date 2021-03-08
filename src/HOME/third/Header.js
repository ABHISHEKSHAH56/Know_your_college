import React from 'react'
import { Container, Row } from 'react-bootstrap';
import moduleName from '../img/olo.jpg'
import '../extra/Landkro.css'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

export default function Header({name}) {
        let { slug } = useParams();
        console.log(name);
        const posts = useSelector((state) => state.shop.college);
        //console.log(posts)
        const ar=posts.filter((item)=>item.college_id==`${name}` )
        console.log(ar)
        useEffect(() => {
                Aos.init({duration:2000});
         }, [])
        
        
        return (
                <div>

                        <Container >
                                {
                                        ar.map((arr)=>(

                                                <Row>
                                                <div className="col-lg-4 m-2 kam" data-aos="fade-left">
                                                        <img src={arr.logo} width='300px' height='200px'/>                                                                
                                                </div>
                                                <div className="col-lg-7 ram"data-aos="fade-right">
                                                        <h1>{arr.name} </h1>                                                     
                                                                        
                                                </div>
                                                </Row>
                                                

                                        ))
                                }
                                               
                                              

                                 
                                  <hr />                   
                         </Container>

                        
                </div>
        )
}
