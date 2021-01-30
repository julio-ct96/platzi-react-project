import React from 'react';
import logo from '../images/logo-horizontal-blanco.png';
import './styles/Navbar.css';

class Navbar extends React.Component{
    render() {
        return(
                <nav className="navbar container-fluid">
                    <a href="/">
                        <img src={logo} alt="Logo Julio Stack" className="logo-nav"/>
                    </a>
                </nav>
        )
    }
}

export default Navbar;