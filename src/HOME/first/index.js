import React,{useEffect} from 'react'
import Navbar from '../extra/Navbar'
import Footer from '../extra/Footer'
import LandPage from './LandPage'
import Section1 from './Section1'
import Aos from "aos";
import "aos/dist/aos.css"



export default function FirstPage() {
        
        return (

                <>
                        <Navbar />
                        <LandPage />
                        <Section1 />
                        <Footer data-aos="fade-left" />

                </>

               
                       
        )
}
