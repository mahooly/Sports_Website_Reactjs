import React, {Component} from "react";
import {Redirect} from 'react-router-dom';
import fixed_bg from '../../public/images/stadium.png';

const bg = {
    backgroundImage: `url(${fixed_bg})`
};

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            redirect: false
        };
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    };

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    };

    handleConfirmPasswordChange = event => {
        this.setState({
            confirmPassword: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            redirect: true
        })
    };

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/"/>;
        }
        return (
            <div className="Signup" style={bg}>
                <form className='form-submission' onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <label>Password</label>
                    <input
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        type="password"
                    />
                    <label>Confirm Password</label>
                    <input
                        value={this.state.confirmPassword}
                        onChange={this.handleConfirmPasswordChange}
                        type="password"
                    />
                    <button
                        className='nav button-nav'
                        disabled={!this.validateForm()}
                        type="submit"
                    >Register</button>
                </form>
            </div>
        );
    }
}