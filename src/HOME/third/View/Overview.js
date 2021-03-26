import React from 'react';
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoaderHai from '../../extra/Loader';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';





export default function OverView() {
        useEffect(() => {
                Aos.init({duration:2000});
         }, [])
        const posts = useSelector((state) => state.shop.overview);
        
        return (
               
                <Container data-aos="fade-up"  >
                                <div className="head">
                                        <h2>Overview</h2>
                                </div>
                                <div className="display-cutoff ">
                                        <Table striped bordered hover >
                                                { posts ?
                                                 posts.map((e) => (
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
                                                )):<LoaderHai />
                                                }
                                        </Table>

                                </div>
                        </Container>
     
        )
}
