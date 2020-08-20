import React from 'react'
import './Image.css'

const Image = (props) => (
    <div className="col-sm-3">
        <img className="image" src={props.image} />
    </div>
)

export default Image