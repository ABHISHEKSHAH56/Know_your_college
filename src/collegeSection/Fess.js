import React from 'react';
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import LoaderHai from '../extra/Loader';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';
import { fetchfees } from '../api';
import { useState } from 'react';
import Somethingwentwrong from './Somethingwentwrong';
import Load from './Load';





export default function Fees() {
        let { _id } = useParams();

        const [posts, setposts] = useState(null)
        useEffect(() => {
                Aos.init({ duration: 2000 });
                fetchfees(_id).then((res) => {
                        setposts(res.data)
                        console.log(posts)
                }).catch((err) => {
                        console.log(err)

                })
        }, [])


        console.log(posts)


        return (
                <div >
                        <Container data-aos="fade-up">
                                <div className="head">
                                        <h2>Fees</h2>
                                </div>
                                <div className="display-cutoff  " style={{ overflow: "" }}>
                                        <Table striped bordered hover >
                                                <thead >
                                                        <tr>
                                                                <th  >Course</th>
                                                                <th className="text-center">Fees</th>

                                                        </tr>


                                                </thead>
                                                <tbody >
                                                        {




                                                                posts ?
                                                                        posts.map((e) => (

                                                                                <tr key={e._id}>
                                                                                        <td className="fw-blod   table-success ">{e.course}</td>
                                                                                        <td className="fw-bld   secondary">{e.amount} -/</td>
                                                                                </tr>



                                                                        )) : <Load />
                                                        }

                                                </tbody>
                                        </Table>

                                </div>
                        </Container>
                </div>

        )
}
