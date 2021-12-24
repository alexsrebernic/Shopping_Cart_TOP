import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import React from "react"
let styleH1 = {
    'color':'black',
    'textDecoration':"none"
}
const Header = (props   ) => {
    console.log(props)
    return(
        <div id="header-container">
            <div id="title-header-container">
                <Link style={styleH1}  to='/'>
                <h1 style={styleH1}>
                        .greengrocery
                </h1>
                </Link>
                
            </div>
            <div id="links-header-container">
                <ul>
                    <li>
                        <Link style={styleH1}  to='/'>
                       <Button variant="outline-dark">Home</Button>
                       </Link>

                    </li>
                    <li>
                        <Link style={styleH1}  to='/shop'>
                       <Button variant="outline-dark">Shop</Button>
                       </Link>
                    </li>
                    <li>
                       {props.offCanvas}
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header