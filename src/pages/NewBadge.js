import React from 'react';
import Navbar from '../components/Navbar';
import logo from '../images/logo6blanco.png'
import '../index.css';
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm"

class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            instagram: '',
        },
    };

    handleChange = e => {
        /*const nextForm = this.state.form;
        nextForm[e.target.name] = e.target.value;*/

        this.setState({
            /*form: nextForm,*/
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    };

    render(){
        return(
            <div>
                <div className="badge-new-hero mb-4">
                    <Navbar/>
                    <div className="center-logo">
                        <img src={logo} alt="Logo" className="img-fluid"/>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName}
                                   lastName={this.state.form.lastName}
                                   jobTitle={this.state.form.jobTitle}
                                   instagram={this.state.form.instagram}
                                   email={this.state.form.email}
                                   hastag="NeverStopLearning"/>
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BadgeNew;