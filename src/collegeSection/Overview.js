import React from 'react';
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import LoaderHai from '../extra/Loader';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';
import { fetchone } from '../api';
import { useState } from 'react';
import Load from './Load';





export default function OverView() {
        let { _id } = useParams();
        console.log(_id)
        const [post, setposts] = useState(false);
        useEffect(() => {

                fetchone(_id).then((res) => {
                        setposts(res.data)

                }).catch((err) => {
                        console.log(err)

                })
        }, [])

        return (
                <div >
                        <Container data-aos="fade-up"  >
                                <div className="head" >
                                        <h2 className="text-primaray m-2">Overview</h2>
                                </div>
                                <div className="display-cutoff ">
                                        <Table striped bordered hover >
                                                {
                                                        post ? post[0] === null ? <LoaderHai /> :

                                                                post.map((e) => (
                                                                        <tbody key={e._id}>
                                                                                <tr key={e.name}>
                                                                                        <td className="fw-blod   table-success ">Insitution name</td>
                                                                                        <td className="fw-bld   secondary">{e.name}</td>
                                                                                </tr>
                                                                                <tr key={e.alsoknownas}>
                                                                                        <td className="fw-blod   table-success ">Also known as</td>
                                                                                        <td className="fw-bld   secondary">{e.alsoknownas}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                        <td className="fw-blod   table-success ">Affilated</td>
                                                                                        <td className="fw-bld   secondary">{e.affilated}</td>

                                                                                </tr>
                                                                                <tr>
                                                                                        <td className="fw-blod   table-secondary ">Campus</td>
                                                                                        <td className="fw-bld   secondary">{e.campus}</td>

                                                                                </tr>
                                                                                <tr>
                                                                                        <td className="fw-blod   table-secondary ">Location</td>
                                                                                        <td className="fw-bld   secondary">{e.address}</td>

                                                                                </tr>
                                                                                <tr>
                                                                                        <td className="fw-blod   table-secondary ">Nirf ranking</td>
                                                                                        <td className="fw-bld   secondary">{e.nirf}</td>

                                                                                </tr>

                                                                                <tr>
                                                                                        <td className="fw-blod   table-danger">Website</td>

                                                                                        <td className=" f-bld   secondary">
                                                                                                <a href={`${e.website}`}>{e.website}  </a></td>
                                                                                </tr>
                                                                        </tbody>
                                                                )) : <Load />

                                                }
                                        </Table>

                                </div>
                        </Container>
                </div>

        )
}
