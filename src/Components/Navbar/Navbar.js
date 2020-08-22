import React from "react"

const Navbar = (props) => (
    <div className="navbar sticky-top navbar-dark bg-primary d-flex justify-content-between">
        <span className="score">Current score</span>
        <span>Wrong</span>
        <span className="score">High Score</span>
    </div>
)

export default Navbar