import React from 'react'

export default function People(props) {
  return (
    <div className="card m-10" style={{ width: "18rem", height: "25rem"}}>
      <img src={props.avatar} className="card-img-top" alt={props.avatar}/>
      <div className="card-body">
        <h5 className="card-title">{props.first_name} {props.last_name}</h5>
        <p className="card-text">
          {props.email}
        </p>
      </div>
    </div>

  )
}
