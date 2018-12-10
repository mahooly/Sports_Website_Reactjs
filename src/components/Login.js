import React, {Component} from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    };

    handlePasswordChange = event => {
        this.setState(
            {
                password: event.target.value
            }
        );
    };

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <label>Email </label>
                    <input
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <label>Password </label>
                    <input
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        type="password"
                    />
                    <button
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }
}