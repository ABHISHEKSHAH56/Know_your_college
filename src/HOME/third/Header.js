import React from 'react'
import { Container, Row } from 'react-bootstrap';
import moduleName from '../img/olo.jpg'
import '../extra/Landkro.css'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

export default function Header({name}) {
        let { slug } = useParams();
        console.log(name);
        const posts = useSelector((state) => state.shop.college);
        //console.log(posts)
        const ar=posts.filter((item)=>item.college_id==`${name}` )
        console.log(ar)
        
        
        return (
                <div>

                        <Container >
                                {
                                        ar.map((arr)=>(

                                                <Row>
                                                <div className="col-lg-4 m-2 kam">
                                                        <img src={arr.logo} width='300px' height='200px'/>                                                                
                                                </div>
                                                <div className="col-lg-7 ram">
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
