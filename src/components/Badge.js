import React from "react";
import "./styles/Badge.css";
import logoJs from "../images/logo-horizontal-blanco.png";
import avatar from "../images/Julio-Correo-sin-grano(1).png"

class Badge extends React.Component{
    render() {

        return <div className="badge-container">
            <header className="badge-header">
                <img src={logoJs} alt="Logo"/>
            </header>
            <article>
                <section className="badge-section-name">
                    <img className="badge-avatar" src={avatar} alt="Avatar"/>
                    <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
                </section>
                <section className="badge-section-info">
                    <h2>{this.props.jobTitle}</h2>
                    <h4>{this.props.instagram}</h4>
                </section>
            </article>
            <footer className="badge-footer">
                <span>#{this.props.hastag}</span>
            </footer>
        </div>;
    }
}

export default Badge;