import React from 'react'
import Hero from "../component/Hero"
import Banner from '../component/Banner'
import {Link} from "react-router-dom"
import RoomContainer  from '../component/RoomContainer'
 

export const Rooms = () => {
    return (
        <>
        <Hero hero ="roomsHero">
            <Banner title="Our rooms">
             <Link to="/" className="btn-primary">Return home</Link>
         </Banner>
        </Hero>
        
        <RoomContainer/>
        </>
    )
}
export default Rooms