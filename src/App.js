import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import {Shop} from "./components/Shop";
import ItemShop from "./components/ItemShop";
import { Offcanvas } from "react-bootstrap";
function App() {
  
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
          <span className="number-of-items">2</span>
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
  }


  return (
    <div id="app">
      <BrowserRouter>
        <Header offCanvas={<UseOffCanvas placement="end" name="end"/>}/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/shop" exact element={<Shop/>}/>
          <Route path="/shop/:id" element={<ItemShop/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
