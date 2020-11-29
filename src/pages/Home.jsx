import React from 'react'
import Banner from '../component/Banner'
import Hero from '../component/Hero'
import {Link} from "react-router-dom"
import Services from '../component/Services'

 const Home = () => {
    return (
        <>
     <Hero hero="defaultHero">
         <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting At $299">
             <Link to="/room" className="btn-primary">Rooms</Link>
         </Banner>
     </Hero>
     <Services/>
     </>
    )
}
export default Home