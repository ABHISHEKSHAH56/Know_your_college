import React from 'react';
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoaderHai from '../../extra/Loader';





export default function CourseOffer() {
        const posts = useSelector((state) => state.shop.course);
        return (
               
                <Container >
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
                                                        
                                                                <tr key={e._id}>
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
