import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    return (
        <div>
        <Navbar >
        <Navbar.Brand href="/home">
            <img src="https://img.icons8.com/plasticine/100/000000/plant-under-sun.png"
             width="50"
             height="50"
             ></img>
            PlantExchange Denver
            </Navbar.Brand>
        <Navbar.Text>share some plants with your neighbors :)</Navbar.Text>
        
        </Navbar>
    </div>
    )
}

export default Header;
