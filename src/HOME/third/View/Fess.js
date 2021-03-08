import React from 'react';
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoaderHai from '../../extra/Loader';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';





export default function Fees() {
        useEffect(() => {
                Aos.init({duration:2000});
         }, [])
        const posts = useSelector((state) => state.shop.fees);
        
        return (
               
                <Container data-aos="fade-up">
                                <div className="head">
                                        <h2>Fees</h2>
                                </div>
                                <div className="display-cutoff ">
                                        <Table striped bordered hover >
                                                <thead >
                                                        <tr>
                                                        <th  >Course</th>
                                                        <th className="text-center">Fees</th>

                                                        </tr>

                                                        
                                                </thead>
                                                <tbody >
                                                 {
                                                        posts?
                                                 posts.map((e) => (
                                                        
                                                                <tr key={e._id}>
                                                                        <td className="fw-blod   table-success ">{e.course}</td>
                                                                        <td className="fw-bld   secondary">{e.amount} -/</td>
                                                                </tr>
                                                                
                                                               
                                                       
                                                )):<LoaderHai />
                                                }
                                        
                                         </tbody>
                                        </Table>

                                </div>
                        </Container>
     
        )
}
