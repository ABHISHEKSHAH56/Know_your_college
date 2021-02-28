import React,{useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router,Switch, Route,
        useRouteMatch,
        useParams
} from "react-router-dom";
import CutMenuHai from './menu';
import Round from './Round';





export default function CutOff({data}) {  
        
        
        const routes = [
                {
                        path: `/Round/:id`,
                        exact: true,

                        main: () => <Round name={data} />
                }
                
        ];
        return (
                <Router>
                        <div>
                               
                                <Container style={{ 'marginTop': '80px' }} >
                                        <Row className='cut-menu'>
                                                <Col className="col-xl-3  col-lg-3 col-md-3 " >
                                                        <CutMenuHai name={data} />
                                                </Col>
                                                <Col className="col-xl-9 col-lg-9 mt-10 col-md-9 " style={{ 'marginTop': '10px', 'minHeight': '80vh' }}  >
                                                        <Switch>
                                                                {routes.map((route, index) => (
                                                                        // Render more <Route>s with the same paths as
                                                                        // above, but different components this time.
                                                                        <Route
                                                                                key={index}
                                                                                path={route.path}
                                                                                exact={route.exact}
                                                                                children={<route.main />}
                                                                        />
                                                                ))}
                                                        </Switch>

                                                </Col>
                                        </Row>
                                </Container>
                               

                        </div>

                </Router>
        )
}

