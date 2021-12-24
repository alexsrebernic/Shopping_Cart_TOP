import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import img1 from './imgShop/istockphoto-1065932456-612x612.jpg'
import img2 from './imgShop/istockphoto-471074651-612x612.jpg'
import img3 from './imgShop/depositphotos_19638723-stock-photo-fresh-orange-fruit-with-leaf.jpg'
import img4 from './imgShop/36167947-lemon-isolated.jpg'
import img5 from './imgShop/depositphotos_52498055-stock-photo-pumpkin.webp'
import img6 from './imgShop/istockphoto-1043855540-612x612.jpg'
import img7 from './imgShop/istockphoto-920478620-170667a.jpg'
import img8 from './imgShop/marcofood190100014.jpg'
import img9 from  './imgShop/92819506-aguacate-fresco-hass-con-mitad-aislado-sobre-fondo-blanco.jpg'
import img10 from './imgShop/bbac32ebe85a4164d12fe9484b4bf198.jpg'
import img11 from './imgShop/istockphoto-612833996-170667a.jpg'
import img12 from './imgShop/istockphoto-186861864-170667a.jpg'

export const items = [
    {name:"Banana",price:4,img : img1,id:1,quantity:0,total:0},
    {name:"Apple",price:2,img : img2,id:2,quantity:0,total:0},
    {name:"Orange",price:4,img : img3,id:3,quantity:0,total:0},
    {name:"Lemon",price:3,img : img4,id:4,quantity:0,total:0},
    {name:"Pumpkin",price:10,img : img5 ,id:5,quantity:0,total:0},
    {name:"Kiwi",price:5,img : img6,id:6,quantity:0,total:0},
    {name:"Green apple",price:3,img : img7,id:7,quantity:0,total:0},
    {name:"Cherry",price:1,img :img8 ,id:8,quantity:0,total:0},
    {name:"Avocado",price:7,img: img9,id:9,quantity:0,total:0},
    {name:"Watermelon",price:12,img :img10 ,id:10,quantity:0,total:0},
    {name:"Pomegranate",price:9,img :img11 ,id:11,quantity:0,total:0},
    {name:"Pear",price:2,img :img12 ,id:12,quantity:0,total:0},
]
let styleLink = {
    'color':'black',
    'textDecoration':"none"
}

export const Shop = () => {
    let firstArray = items.slice(0,4)
    let secondArray = items.slice(4,8)
    let thirdArray = items.slice(8)
    return(
        <div id="shop-container" className="container d-flex">
            <div className="col">
            {firstArray.map(item => {
               return(
            <Link style={styleLink} to={`/shop/${item.id}`} key={item.id}>
                <Card className='card' style={{ width: '18rem' ,height:'23rem'}} >
                    <Card.Img className="image" variant="top" src={item.img}/>
                <Card.Body>
                    <Card.Title className="border-bottom w-100 text-center">{item.name}</Card.Title>
                    <Card.Text className="textCard w-100">
                    Price: ${item.price}
                    </Card.Text>
                </Card.Body>
                </Card>
           </Link>
               )
           })} 
            </div>
            <div className="col">
            {secondArray.map(item => {
               return(
            <Link style={styleLink} to={`/shop/${item.id}`} key={item.id}>
                <Card className='card' style={{ width: '18rem' ,height:'23rem'}} >
                    <Card.Img className="image" variant="top" src={item.img}/>
                <Card.Body>
                    <Card.Title className="border-bottom w-100 text-center">{item.name}</Card.Title>
                    <Card.Text className="textCard w-100">
                    Price: ${item.price}
                    </Card.Text>
                </Card.Body>
                </Card>
           </Link>
               )
           })}
            </div>
            <div className="col">
            {thirdArray.map(item => {
               return(
            <Link style={styleLink} to={`/shop/${item.id}`} key={item.id}>
                <Card className='card' style={{ width: '18rem' ,height:'23rem'}} >
                    <Card.Img className="image" variant="top" src={item.img}/>
                <Card.Body>
                    <Card.Title className="border-bottom w-100 text-center">{item.name}</Card.Title>
                    <Card.Text className="textCard w-100">
                    Price: ${item.price}
                    </Card.Text>
                </Card.Body>
                </Card>
           </Link>
               )
           
           })}
            </div>
        </div>
    )

}
