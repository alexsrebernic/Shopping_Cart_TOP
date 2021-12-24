import { Card,Button } from "react-bootstrap";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exactly element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/shop/:id"/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
