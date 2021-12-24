import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Carousel from 'react-elastic-carousel'
import Item from "./Item"
const breakPoints = [
    {width:1,itemsToShow:1},
    {width:550,itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:1200,itemsToShow:4}
]

const Home = () => {
  
    return (
        <div id="container-home">
            <div id="title-hero-home">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempore voluptates consequatur alias. Asperiores soluta laudantium, eaque nesciunt excepturi exercitationem?
                </span>
                <Link to='/shop'>
                <Button variant="outline-dark">Go shop</Button>
                </Link>
            </div>
            <div id="carousel-home">
            <>
                <Carousel itemsToShow={2} enableAutoPlay autoPlaySpeed={2000} breakPoints={breakPoints}>
                    <Item ><img alt="carousel fruit " src={require('./imgCarousel/pexels-pixabay-35629.jpg')}/></Item>
                    <Item ><img alt="carousel fruit "  src={require('./imgCarousel/pexels-oleg-magni-1024545.jpg')}/></Item>
                    <Item ><img alt="carousel fruit " src={require('./imgCarousel/pexels-maria-lindsey-content-creator-1453713.jpg')}/></Item>
                    <Item ><img alt="carousel fruit " src={require('./imgCarousel/pexels-marco-antonio-victorino-2363347.jpg')}/></Item>
                    <Item ><img alt="carousel fruit " src={require('./imgCarousel/pexels-lisa-3978830.jpg')}/></Item>
                    <Item ><img alt="carousel fruit " src={require('./imgCarousel/pexels-lisa-1395958.jpg')}/></Item>
                    <Item ><img alt="carousel fruit " src={require('./imgCarousel/pexels-engin-akyurt-1435735.jpg')}/></Item>
                    <Item ><img alt="carousel fruit "src={require('./imgCarousel/pexels-dominika-roseclay-2208836.jpg')}/></Item>
                    <Item ><img alt="carousel fruit "src={require('./imgCarousel/pexels-daria-shevtsova-1824354.jpg')}/></Item>
                </Carousel>
            </>
            </div>

        </div>
    )
}   
export default Home