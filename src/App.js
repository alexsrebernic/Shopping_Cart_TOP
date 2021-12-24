import { BrowserRouter,Route,Routes } from "react-router-dom";
import { items } from "/home/alexsrebernic/Alex/Programacion/Projects/projectOdinJsPath/shopping-cart-top/src/components/Shop.js"
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import {Shop} from "./components/Shop";
import ItemShop from "./components/ItemShop";
import { Offcanvas,Button } from "react-bootstrap";
function App() {
  const [numberOfItems,setItems] = useState(0)
  const [shoppingCart,setShoppingCart] = useState([])

  const submitItemToShoppingCart = (id) => {
    if((/[0-9]/.test(numberOfItems)) === true && numberOfItems > 0){
      const item = items.filter(item => {
        return item.id === Number(id) 
    }).pop()
      item.quantity += Number(numberOfItems)
      item.total = item.quantity * item.price
      let index = shoppingCart.indexOf(item)
      if(index > -1) {
        let array = [...shoppingCart]
        array[index] = item
        setShoppingCart(array)
      } else {
        setShoppingCart(shoppingCart.concat(item))

      }
    } else {
      return alert("Please use numbers")
    }
  }

  const UseOffCanvas = ({name,...props}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        <div className="d-flex">
          <button id="button-shopping-cart" onClick={handleShow}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            
            </svg>
          </button>
            <span className="number-of-items">{shoppingCart.length}</span>
        </div>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {shoppingCart.map(item => {
              return(
                <div className="container-item-offcanvas" key={item.id}>
                  <h2>{item.name}</h2>
                  <span>Quantity: {item.quantity}</span>
                  <h3>Total: ${item.total}</h3>
                </div>
              )
            })}
            <div id="total-container" className="w-100">
              <h3>Total: ${shoppingCart.map(item => item.total).reduce((prev,curr) => prev + curr,0)}</h3>
            </div>
            <Button className="w-100" variant="success">Buy</Button>
          </Offcanvas.Body>
        </Offcanvas>
      </>
  );
  }


  return (
    <div id="app">
      <BrowserRouter>
        <Header  offCanvas={<UseOffCanvas placement="end" name="end"/>}/>
        <Routes>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/shop" exact element={<Shop/>}/>
          <Route path="/shop/:id" element={<ItemShop submitItemToShoppingCart={submitItemToShoppingCart} setItems={setItems}/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
