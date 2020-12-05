import React from 'react'
import Banner from '../component/Banner'
import Hero from '../component/Hero'
import {Link} from "react-router-dom"
import FeatureRoom from '../component/FeatureRoom'
import Services from '../component/Services'

 const Home = () => {
    return (
        <>
     <Hero hero="defaultHero">
         <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting At $299">
             <Link to="/rooms" className="btn-primary">Rooms</Link>
         </Banner>
     </Hero>
     <Services/>
     <FeatureRoom/>
     </>
    )
}
export default Home