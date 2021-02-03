import React from 'react';
import Navbar from "../components/Navbar";
import logo from '../images/logo6blanco.png';

class Badges extends React.Component{
    render() {
        return (
            <div>
                <div className="badge-new-hero">
                    <Navbar/>
                    <div className="center-logo">
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Badges;