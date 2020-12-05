import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
//import {RoomConsumer} from '../Context'
import {withRoomConsumer} from '../Context'
import Loading from './Loading'
 
// higher order component
function RoomContainer ({context}){
    const {loading, sortedRooms,rooms}= context
    if (loading){
         return<Loading/>
      }
      return(<div>
          
          <RoomFilter rooms={rooms}/>
          <RoomList rooms={sortedRooms}/>
                              
      </div>)
}

export default withRoomConsumer(RoomContainer)
 
// contextapi
//export default function RoomContainer() {
   // return (
       // <RoomConsumer>
            //{value=>{
               // const {loading, sortedRooms,rooms}= value
               // if (loading){
                  //  return<Loading/>
               // }
                //return(<div>
                //    <h1>h f rc</h1>
                //    <RoomList rooms={sortedRooms}/>
                //    <RoomFilter rooms={rooms}/>                    
                //</div>)
           // }}
        //</RoomConsumer>       
    //)
//}
