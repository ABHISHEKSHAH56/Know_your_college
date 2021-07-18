import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Feed, Icon } from 'semantic-ui-react'
import a from '../../img/exam.svg';
import b from '../../img/col.svg';
import ck from '../../img/3.png';
import d from '../../img/cutoff.svg';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';

export default function Section1() {
        useEffect(() => {
                Aos.init({ duration: 2000 });
        }, [])

        return (
                <div className="container">
                        <div className="header" data-aos="fade-down">
                                <h1>Quick Links</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius obcaecati, quibusdam eaque deserunt animi quos quo! Eaque, qui modi!</p>
                        </div>
                        <Container >
                                <Row className="service" data-aos="fade-right">

                                        <Col className="col-xl-3 col-lg-4  col-md-6 col-sm-6 col-xs-12">
                                                <div className="first">
                                                        <Link to="/college/list">
                                                                <Card className="cardk" style={{ width: '20rem' }}>
                                                                        <Card.Text className="d-flex flex-row justify-content-around"  >
                                                                                <Feed>
                                                                                        <Feed.Label>
                                                                                                <img src={b} className="m-1" width='100px' height='80px' />
                                                                                        </Feed.Label>
                                                                                </Feed>
                                                                                <Card.Title className=" mt-6 fw-bold align-self-center">College</Card.Title>
                                                                        </Card.Text>
                                                                        <Card.Body>

                                                                                <Card.Text>
                                                                                        Some quick example text to build on the card title and make up the bulk
                                                                                        of the card's content.
                                                                                </Card.Text>
                                                                        </Card.Body>
                                                                </Card> </Link>


                                                </div>
                                        </Col>
                                        <Col className="col-xl-3 col-lg-4  col-md-6 col-sm-6 col-xs-12">

                                                <div className="first">
                                                        <Link to="/comingsoon">
                                                                <Card className="cardk" style={{ width: '20rem' }}>
                                                                        <Card.Text className="d-flex flex-row justify-content-around"  >
                                                                                <Feed>
                                                                                        <Feed.Label>
                                                                                                <img src={d} className="m-1" width='100px' height='100px' />
                                                                                        </Feed.Label>
                                                                                </Feed>
                                                                                <Card.Title className=" mt-6 fw-bold align-self-center">Cut-Off </Card.Title>
                                                                        </Card.Text>
                                                                        <Card.Body>

                                                                                <Card.Text>
                                                                                        Some quick example text to build on the card title and make up the bulk
                                                                                        of the card's content.
                                                                                </Card.Text>
                                                                        </Card.Body>
                                                                </Card> </Link>
                                                </div>


                                        </Col>
                                        <Col className="col-xl-3 col-lg-4  col-md-6 col-sm-6 col-xs-12">
                                                <div className="first"> <Link to="/comingsoon">
                                                        <Card className="cardk" style={{ width: '20rem' }}>
                                                                <Card.Text className="d-flex flex-row justify-content-around"  >
                                                                        <Feed>
                                                                                <Feed.Label>
                                                                                        <img src={ck} className="m-1" width='100px' height='100px' />
                                                                                </Feed.Label>
                                                                        </Feed>
                                                                        <Card.Title className=" mt-6 fw-bold align-self-center">College Predictor</Card.Title>
                                                                </Card.Text>
                                                                <Card.Body>

                                                                        <Card.Text>
                                                                                Some quick example text to build on the card title and make up the bulk
                                                                                of the card's content.
                                                                        </Card.Text>
                                                                </Card.Body>
                                                        </Card> </Link>
                                                </div>

                                        </Col>
                                        <Col className="col-xl-3 col-lg-4  col-md-6 col-sm-6 col-xs-12">
                                                <div className="first">
                                                        <Link to="/comingsoon">
                                                                <Card className="cardk" style={{ width: '20rem' }}>
                                                                        <Card.Text className="d-flex flex-row justify-content-around"  >
                                                                                <Feed>
                                                                                        <Feed.Label>
                                                                                                <img src={a} width='100px' height='100px' />
                                                                                        </Feed.Label>
                                                                                </Feed>
                                                                                <Card.Title className=" mt-6 fw-bold align-self-center"> Entrance-Exam</Card.Title>
                                                                        </Card.Text>
                                                                        <Card.Body>

                                                                                <Card.Text>
                                                                                        Some quick example text to build on the card title and make up the bulk
                                                                                        of the card's content.
                                                                                </Card.Text>
                                                                        </Card.Body>
                                                                </Card> </Link>
                                                </div>

                                        </Col>
                                </Row>

                        </Container>

                </div>

        )
}

