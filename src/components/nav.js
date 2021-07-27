import React from "react"
import {Link} from "react-router-dom"

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/"><div className="nav-item"><span className="nav-logo">iStocks</span></div></Link>
            <Link to="/stocks"><div className="nav-item">Stocks</div></Link>
            <Link to="/about"><div className="nav-item">About</div></Link>
        </div>
    )
}

export default Nav 