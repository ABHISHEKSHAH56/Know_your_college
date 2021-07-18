import React from 'react';
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import LoaderHai from '../extra/Loader';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';
import { fetchcourse } from '../api';
import { useState } from 'react';
import Load from './Load';





export default function CourseOffer() {
        let { _id } = useParams();
        const [posts, setposts] = useState(null)
        useEffect(() => {
                Aos.init({ duration: 2000 });
                fetchcourse(_id).then((res) => {
                        setposts(res.data)
                        console.log(posts)
                }).catch((err) => {
                        console.log(err)

                })
        }, [])



        return (
                <div >
                        <Container  >
                                <div className="head">
                                        <h2>Course Offered</h2>
                                </div>
                                <div className="display-cutoff ">
                                        <Table bordered hover >
                                                <thead >
                                                        <tr>
                                                                <th  >Course</th>
                                                        </tr>


                                                </thead>
                                                <tbody >
                                                        {posts ?
                                                                posts.map((e) => (

                                                                        <tr key={e._id} data-aos="fade-left">
                                                                                <td className="fw-blod tr-class   ">{e.course}</td>

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
