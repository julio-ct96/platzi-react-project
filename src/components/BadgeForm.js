import React from 'react';

class BadgeForm extends React.Component{
    /*state = {

    };*/

    /*handleChange = (e) =>{
        /!*
        console.log({
            name: e.target.name,
            value: e.target.value
        });
        *!/
    this.setState({
            [e.target.name]: e.target.value,
        })
    }*/

    handleClick = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <h1 className="font-weight-bold">Rellena tu ficha</h1>
                <form action="" className="form-group">
                    <label htmlFor="firstName">Nombre:</label>
                    <input onChange={this.props.onChange} type="text" className="form-control" name="firstName" id="firstName" value={this.props.formValues.firstName}/>

                    <label htmlFor="lastName">Apellido:</label>
                    <input onChange={this.props.onChange} type="text" className="form-control" name="lastName" id="lastName" value={this.props.formValues.lastName}/>
                    <hr/>
                    <label htmlFor="email">Email:</label>
                    <input onChange={this.props.onChange} type="email" className="form-control" name="email" id="email" value={this.props.formValues.email}/>

                    <label htmlFor="jobTitle">Empleo:</label>
                    <input onChange={this.props.onChange} type="text" className="form-control" name="jobTitle" id="jobTitle" value={this.props.formValues.jobTitle}/>

                    <label htmlFor="instagram">Instagram:</label>
                    <input onChange={this.props.onChange} type="text" className="form-control" name="instagram" id="instagram" value={this.props.formValues.instagram}/>
                </form>
                <button onClick={this.handleClick} className="btn btn-danger">Guardar</button>
            </div>
        )
    }
}

export default BadgeForm;