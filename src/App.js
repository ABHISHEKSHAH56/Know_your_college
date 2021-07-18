import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


export default function App() {

        return (
                <Router basename={process.env.PUBLIC_URL}>
                        <Layout />
                </Router>
        )
}
