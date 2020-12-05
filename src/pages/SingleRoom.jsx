import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledHero from '../component/StyledHero'

 class SingleRoom extends Component {
 constructor(props) {
     super(props)
 //console.log(this.props);
 this.state={
     slug:this.props.match.params.slug,
     defaultBcg
 }
     
 }
 static contextType = RoomContext
 //componentDidMount(){}
 


    render() {
        const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/room " className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
        name,
        description,
        capacity,
        size,
        price,
        extras,
        breakfast,
        pets,
        images
      } = room;
        return (
           <StyledHero img={images[0]}>
               <Banner title={`${name} room`}>
                   <Link to="/room" className="btn-primary">
                       back to rooms
                   </Link>
               </Banner>
           </StyledHero>
        )
    }
}
export default SingleRoom