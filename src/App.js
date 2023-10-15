
import React from "react";
import { useCookies } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './home';
import Contactus from './Contactus';
import GaneshJIIcon from './SliderImage/NavbarImage/E_Greeting_Icon.png';
import Aarti from "./aarti";
import Festival from './festival'

import Footer from './headerandfooter/footer';

function App() {
  const [cookies] = useCookies(['token']);
  const isLoggedIn = cookies['token'];
  console.log(isLoggedIn);

  const renderLink = () => {
    if (isLoggedIn  !== 'undefined') {
      return (
        <Nav.Link href="/Contactus">Contactus</Nav.Link>
      );
    }

    return null;
  };

  return (
    <div className="App">
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/"><img src={GaneshJIIcon} alt="logo" /></Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/aarti">Aarti</Nav.Link>
        <Nav.Link href="/festival">Festival</Nav.Link>
        {renderLink()}
        </Nav>
  
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aarti" element={<Aarti />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
