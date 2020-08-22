import React from "react"

const Navbar = (props) => (
    <div className="navbar sticky-top navbar-dark bg-primary d-flex justify-content-between">
        <span className="score">Current score : {props.currentScore}</span>
        <span className={props.messageStyle}>{props.message}</span>
        <span className="score">High Score : {props.highScore}</span>
    </div>
)

export default Navbar