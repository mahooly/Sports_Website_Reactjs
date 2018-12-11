import React, {Component} from "react";
import fixed_bg from '../../public/images/stadium.png';

const bg = {
    backgroundImage: `url(${fixed_bg})`
};

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
            <div className="Login" style={bg}>
                <form className='form-submission' onSubmit={this.handleSubmit}>
                    <label>ایمیل </label>
                    <input
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <label>رمز عبور </label>
                    <input
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        type="password"
                    />
                    <button
                        className='nav button-nav'
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        ورود
                    </button>
                </form>
            </div>
        );
    }
}