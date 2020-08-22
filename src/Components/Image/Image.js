import React from 'react'

const Image = (props) => (
    <div className="col-sm-3" id={props.id}>
        <img className="image" src={props.image} onClick = { () => props.clickImage(props.id)} />
    </div>
)

export default Image