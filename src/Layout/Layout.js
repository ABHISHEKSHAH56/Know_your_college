import React from 'react'
import Navbar from '../extra/Navbar'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import E404 from '../Error/E404';
import E500 from '../Error/E500';
import CollegeLayout from './CollegeLayout';
import FirstPage from '../Page/first';
import Second from '../Page/sec'
import Checkout from '../extra/Checkout';

const ErrorLayout = ({ match: { url } }) => (

        <Switch>
                <Route path={`${url}/404`} component={E404} />
                <Route path={`${url}/500`} component={E500} />

                {/*Redirect*/}
                <Redirect to={`${url}/404`} />

        </Switch>

);

const CollegeRoutes = ({ match: { url } }) => (

        <Switch>
                <Route path={`${url}/list`} component={Second} />
                <Route path={`${url}/:_id`} component={CollegeLayout} />
                <Route path={`${url}/comingsoon`} component={Checkout} />

                {/*Redirect*/}
                <Redirect to={`errors/404`} />
        </Switch>

);



export default function Layout() {
        return (
                <>
                        <Navbar />
                        <Switch>
                                <Route path='/' exact component={FirstPage} />
                                <Route path='/college' component={CollegeRoutes} />
                                <Route path="/errors" component={ErrorLayout} />

                                {/*Redirect*/}
                                <Redirect to="/errors/404" />
                        </Switch>

                </>
        )
}
