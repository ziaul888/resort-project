 import React, { Component } from 'react';
 import items from './data.js'
// import Loading from "./Loading"

 const RoomContext= React.createContext();
 
 class RoomProvider extends Component {
     state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading :true

     }


     componentDidMount(){
         let  rooms=this.formatData(items)
         //console.log(rooms);
         let featuredRooms= rooms.filter(room=> room.featured === true);
         this.setState({
         rooms,featuredRooms,sortedRooms:rooms,
        loading:false
        }) 
     }
     formatData(items){
         let temItems = items.map(item =>{
             let id =item.sys.id
             let images = item.fields.images.map(image=> image.fields.file.url);
             let room= {...item.fields,images,id}
             return room;
         })
         return temItems
     }

     getRoom=slug=>{
         let tempRooms =[...this.state.rooms]
         const room = tempRooms.find(room=>room.slug===slug)
         return room;
     }
     render() {
         return (
             <RoomContext.Provider value={{...this.state, getRoom:this.getRoom }}>
                 {this.props.children}
             </RoomContext.Provider>
         );
     }
 }
  
 const RoomConsumer = RoomContext.Consumer;

 export function withRoomConsumer(Component){
     return function ConsuerWrapper (props){
        return <RoomConsumer>
            {value=><Component {...props} context={value}/>}
        </RoomConsumer>
     }
 }

 export  {RoomProvider, RoomConsumer, RoomContext} ;