import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import  Title from '../component/Title'

//get all uqinue values

const getUqinue =(items,value)=>{
return [...new Set(items.map (item=>item[value]))]
}

export default function RoomFilter({rooms}) {
  const context =useContext(RoomContext);
  //console.log(context);
  const {handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets}=context;

  let types =getUqinue(rooms, "type")
  types =['all',...types];
  types =types.map((item,index)=>{
  return<option value={item} key={index}>{item}</option>
  })

    return (
        <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
                {/*select type  */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
            </form>
        </section>
    ) 
}
