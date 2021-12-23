import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
const Header = () => {
    return(
        <div id="header-container">
            <div id="title-header-container">
                <h1>
                    .greengrocery
                </h1>
            </div>
            <div id="links-header-container">
                <ul>
                    <li>
                       <Button variant="outline-dark">Home</Button>
                    </li>
                    <li>
                        <Button variant="outline-dark">Shop</Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header