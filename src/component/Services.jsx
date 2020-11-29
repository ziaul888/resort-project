import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
state={
    services:[{
    icons:<FaCocktail/>,
    tilte:'free cocktails',
    info:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eligendi!"
},
{
    icons:<FaHiking/>,
    tilte:'endless hiking',
    info:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eligendi!"
},{
    icons:<FaShuttleVan/>,
    tilte:'free shuttle van',
    info:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eligendi!"
},{
    icons:<FaBeer/>,
    tilte:'strongest  Beer',
    info:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eligendi!"
}]
};
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) =>{
                        return <article key={index} className="service">
                            <span>{item.icons}</span>
                            <h6>{item.tilte}</h6>
                            <p> {item.info}</p>
                        </article>
                    })}
                </div>
                
            </section>
        )
    }
}
