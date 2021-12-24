import { Link,Router } from "react-router-dom"
import { Button } from "react-bootstrap"
let styleH1 = {
    'color':'black',
    'textDecoration':"none"
}
const Header = () => {
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header