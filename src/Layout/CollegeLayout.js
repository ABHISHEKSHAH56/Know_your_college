import React from 'react'
import Overview from '../collegeSection/Overview'
import Header from '../collegeSection/Header'
import Course from '../collegeSection/Course'
import Fess from '../collegeSection/Fess'
import Index from '../collegeSection/Cutoff/Index'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { useState } from 'react'
import Footer from '../extra/Footer'
import { useEffect } from 'react'
import { fetchone } from '../api'
import { useParams } from 'react-router-dom'

export default function CollegeLayout() {
        let { _id } = useParams();
        console.log(_id)
        const [posts, setposts] = useState(false);
        useEffect(() => {

                fetchone(_id).then((res) => {
                        setposts(res.data)

                }).catch((err) => {
                        console.log(err)

                })
        }, [])

        const [activeItem, setactiveitem] = useState('home')
        const project = () => {
                switch (activeItem) {

                        case "home": return <Overview post={posts} />;
                        case "fees": return <Fess />;
                        case "course": return <Course />;
                        case "cutoff": return <Index />


                        default: return <h1>No project match</h1>
                }
        }
        return (

                <div>
                        <div className="container">
                                <Header post={posts} />
                        </div>
                        <div className="container">
                                <Menu pointing>
                                        <Menu.Item
                                                name='home'
                                                active={activeItem === 'home'}
                                                onClick={() => setactiveitem("home")}
                                        />
                                        <Menu.Item
                                                name='Fees'
                                                active={activeItem === 'fees'}
                                                onClick={() => setactiveitem("fees")}
                                        />
                                        <Menu.Item
                                                name='Course'
                                                active={activeItem === 'course'}
                                                onClick={() => setactiveitem("course")}
                                        />
                                        <Menu.Item
                                                name='Cutoff'
                                                active={activeItem === 'cutoff'}
                                                onClick={() => setactiveitem("cutoff")}
                                        />

                                </Menu>


                                <div style={{ minHeight: "250px" }} >


                                        <Segment >

                                                {project()}


                                        </Segment>
                                </div>

                        </div>

                        <Footer />


                </div>

        )
}