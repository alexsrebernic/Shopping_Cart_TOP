import { items } from "./Shop"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useParams } from "react-router-dom"
import { Button } from "react-bootstrap"
const ItemShop = ( props) => {
    const {id} = useParams()
    const item = items.filter(item => {
        return item.id === Number(id) 
    }).pop()
    
    return (
        
    <div id="container-item">
        <div id ="container-image-item">
            <TransformWrapper>
            <TransformComponent>
            <img src={item.img} alt="fruit" />
            </TransformComponent>
        </TransformWrapper>       
       </div>
        <div id="container-item-info">
        <h1>{item.name}</h1>
        <h2>Price ${item.price}</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aliquid exercitationem, quo minima dignissimos ipsum quisquam, perspiciatis sit nihil delectus deserunt itaque enim error? Odio corrupti deleniti consectetur sed rerum.</p>
            <div id="buy-container">
                    <input onChange={(event) => props.setItems(event.target.value.replace(/\D/,''))} placeholder="Amount" min={0} maxLength="1"type="text"></input>
                    <Button onClick={() => props.submitItemToShoppingCart(id)}  variant="outline-dark">Add to cart</Button>
            </div>
        </div>

     </div>
    )
}

export default ItemShop