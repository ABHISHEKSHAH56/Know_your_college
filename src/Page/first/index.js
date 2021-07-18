import React, { useEffect } from 'react'
import Footer from '../../extra/Footer'
import LandPage from './LandPage'
import Section1 from './Section1'
import Aos from "aos";
import "aos/dist/aos.css"



export default function FirstPage() {

        return (

                <>

                        <LandPage />
                        <Section1 />
                        <Footer data-aos="fade-left" />

                </>



        )
}
