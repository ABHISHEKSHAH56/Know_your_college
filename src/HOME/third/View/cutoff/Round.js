import React from 'react';
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import LoaderHai from '../../../extra/Loader';





export default function Round({data}) {
        let { path, url } = useRouteMatch();      
        var { id } = useParams();
        
            
        
        const posts = useSelector((state) => state.shop.cutoff);
       
        const arr=posts.filter((item)=>item.round == id )
       
     
        return (
               
                <Container >
                                <div className="head">
                                        <h2>Cutoff</h2>
                                </div>
                                <div className="display-cutoff ">
                                        <Table striped bordered hover >
                                                <thead style={{color:"white",background:"black",height:'140px'}}>
                                                       <tr>
                                                       <th  >Course</th>
                                                        <th className="text-center">Marks</th>
                                            
                                                        </tr>    </thead>
                                                <tbody >
                                                 {
                                                        arr.length > 0 ?
                                                 arr.map((e) => (
                                                        
                                                                <tr key={e._id}>
                                                                        <td className="fw-blod   table-success ">{e.course}</td>
                                                                        <td className="fw-bld   secondary">{e.cutoff} %</td>
                                                                </tr>
                                                               
                                                       
                                                ))
                                                :(
                                                        <LoaderHai />
                                                )
                                                }
                                        
                                         </tbody>
                                        </Table>

                                </div>
                        </Container>
     
        )
}
