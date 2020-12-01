import React, { Component } from 'react'
import {RoomContext} from "../Context"
import Loading from "./Loading"
import Room from "./Room"
import Title from "./Title"

export default class FeatureRoom extends Component {
    
    static contextType = RoomContext
   
    render() { 
        let {loading, featuredRooms: rooms }=this.context;

        rooms = rooms.map(room=>{
            return <Room  key={room.id} room={room}/>
        })
        //console.log(rooms);
        //const value = this.context
        //console.log(value)
        return (
            <section className="featured-rooms">
              <Title title="feature rooms"/> 
              <div className="featured-rooms-center">
                  {loading?<Loading/>:rooms}
             </div>              
                
            </section>
        )
    }
}
