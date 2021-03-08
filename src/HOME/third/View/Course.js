import React from 'react';
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import LoaderHai from '../../extra/Loader';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';





export default function CourseOffer() {
        useEffect(() => {
                Aos.init({duration:2000});
         }, [])
        const posts = useSelector((state) => state.shop.course);
        
        return (
               
                <Container data-aos="fade-up" >
                                <div className="head">
                                        <h2>Course Offered</h2>
                                </div>
                                <div className="display-cutoff ">
                                        <Table  bordered hover >
                                        <thead >
                                                       <tr>
                                                       <th  >Course</th>
                                                       </tr>

                                                        
                                                </thead>
                                                <tbody >
                                                 { posts ?
                                                 posts.map((e) => (
                                                        
                                                                <tr key={e._id}data-aos="fade-left">
                                                                        <td className="fw-blod tr-class   ">{e.course}</td>
                                                                       
                                                                </tr>
                                                               
                                                       
                                                )):<LoaderHai />
                                                }
                                        
                                         </tbody>
                                        </Table>

                                </div>
                        </Container>
     
        )
}
