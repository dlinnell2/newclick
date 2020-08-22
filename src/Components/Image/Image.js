import React from 'react'

const Image = (props) => (
    <div className="col-sm-3">
        <img className="image" src={props.image} />
    </div>
)

export default Image