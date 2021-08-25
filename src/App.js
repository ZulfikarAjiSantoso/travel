import Navbar from "./component/Navbar";
import "./App.css"
import Hero from "./component/Hero";
import { Sliderdata } from "./data/Sliderdata";
import Dropdown from "./component/Dropdown";
import { useState } from "react";
import Info from "./component/Info";
import Login from "./component/Login";
import About from "./component/About";
import Home from "./component/Home";
import Book from "./component/Book";
import Package from "./component/Package";
import Galeri from "./component/Galeri";
import Subs from "./component/Subs";
import Footer from "./component/Footer";
 
function App() {
  const [isopen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isopen)
  }
  return (
    <>
    <Navbar toggle={toggle} />
    {/* <Dropdown isopen={isopen} toggle={toggle} /> */}
    <Home />
    {/* <Info /> */}
    <Package />
    <Galeri />
    <Book />
    <Subs />
    <Footer />
   
    </>
  );
}

export default App;
