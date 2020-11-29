import React from 'react'
import Banner from '../component/Banner'
import Hero from '../component/Hero'
import {Link}  from 'react-router-dom'
//import Banner from '../component/Banner'
//import Hero from "../component/Hero"

 const NotFound = () => {
    return (
        <Hero>
            <Banner title="404" subtitle="Page not Found">
             <Link to="/" className="btn-primary">Return Home</Link>
         </Banner>
        </Hero>
    )
}
export default NotFound