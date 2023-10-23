import React from 'react'

function Pro(props) {
  return (
        <div className="col-6">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <p>{props.price}</p>

                        </div>
  )
}

export default Pro