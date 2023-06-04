import React, { useEffect, useState } from 'react'
import People from './People';

export default function Peoples(props) {

  return (
    <div className='d-inline-flex mr-10 p-3 flex-wrap justify-content-around'>
      {props.result?props.result.map((item) => {
      return (
        <People id={item.id} first_name={item.first_name} last_name={item.last_name} email={item.email} avatar={item.avatar} key={item.id}/>
      )
    })
    : !props.loading&&<div>Click the 'Get User' Button To Get All The Client Details</div>}
    </div>


  )
}
