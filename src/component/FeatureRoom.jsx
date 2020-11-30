import React, { Component } from 'react'
import {RoomContext} from "../Context"

export default class FeatureRoom extends Component {
    
    static contextType = RoomContext
   
    render() {
        const value = this.context
        console.log(value)
        return (
            <div>
                <h1>h feature</h1>
            </div>
        )
    }
}
