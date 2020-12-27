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
  let people =getUqinue(rooms, "capacity");
  people=people.map((item,index)=>{
  return <option key={index} value={item}  >{item}</option>
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
        <div className="form-group">
          <label htmlFor="capacity">guest </label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price"
          >roomprice ${price}</label>
          <input type="range" name="price"  min={minPrice} max={maxPrice} value={price}
          id="price" className="form-control" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="size">
            room size
          </label>
          <div className="size-inputs">
            <input type="number" name="minSize" id="size"  value={minSize} onChange={handleChange} className="size-input" />
            <input type="number" name="maxSize" id="size"  value={maxSize} onChange={handleChange} className="size-input" />
          </div>
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input 
            type="checkbox"
            name="breakfast"
            id="breakfast"
            checked={breakfast}
            onChange={handleChange}
            />
            <label htmlFor="breakfast"   
            >
            breakfast
            </label>
          </div>
          <div className="single-extra">
            <input 
            type="checkbox"
            name="pets"
            id="pets"
            checked={pets}
            onChange={handleChange}
            />
            <label htmlFor="pets"   
            >
            pets
            </label>
          </div>
        </div>
            </form>
        </section>
    ) 
}
