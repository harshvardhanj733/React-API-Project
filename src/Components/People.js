import React from 'react'
import CopyImage from '../Static Images/CopySymbol.svg'

export default function People(props) {

  const handleCopy = ()=>{
    navigator.clipboard.writeText(props.email);
    alert("Copied Successfully!")
  }

  return (
    <div className="mx-auto card my-10 bg-[#EDF7F6] transition ease-in-out duration-300 hover:cursor-pointer hover:scale-110" style={{ width: "18rem", height: "25rem"}}>
      <img src={props.avatar} className="card-img-top" alt={props.avatar}/>
      <div className="card-body">
        <h5 className="card-title font-bold">{props.first_name} {props.last_name}</h5>
        <span className="card-text">
          {props.email}
        </span>
        <span className='card-text'>
        <button type="submit" onClick={handleCopy} ><img src={CopyImage} alt="" className='object-contain h-7 pl-1 pt-1'/></button>
        </span>
      </div>
    </div>

  )
}
