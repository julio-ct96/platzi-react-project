import React from 'react';
import Navbar from '../components/Navbar';
import logo from '../images/logo6blanco.png'
import '../index.css';
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm"

class BadgeNew extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>
                <div className="badge-new-hero mb-4">
                    <img src={logo} alt="Logo" className="img-fluid"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName="Julio" lastName="Saura" jobTitle="Frontend Developer" instagram="@jvlitrxs" hastag="NeverStopLearning"/>
                        </div>
                        <div className="col-6">
                            <BadgeForm/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BadgeNew;