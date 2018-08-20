import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { v1 as uuid } from 'uuid';
import { css } from 'react-emotion';
import { ClipLoader } from 'react-spinners';

import './MyRegister.css' ;

import validateEmail from './helpers/validateEmail';
import validatePassword from './helpers/validatePassword';

import { ErrorMessages, AvatarPicker } from './components';
import { USER_ACTIONS } from './redux/actions';

class MyRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '123@gmail.com',
            fullname: '123',
            password: '123456',
            repassword: '123456',
            avatar: null,

            errorMessages: [],
            emailContainsError: false,
            fullnameContainsError: false,
            passwordContainsError: false,
            repasswordContainsError: false
        }
    }

    initialContainsErrorStatus = () => this.setState({
        errorMessages: [],
        emailContainsError: false,
        fullnameContainsError: false,
        passwordContainsError: false,
        repasswordContainsError: false
    })

    validateConfirmPassword = (password, repassword) => {
        return password !== repassword ? 'Password and Confirm Password are different.' : null;
    }

    validateInputs = () => {
        this.initialContainsErrorStatus();
        let errorMessages = [];

        if (!validateEmail(this.state.email)) {
            errorMessages.push("Incorrect Email format");
            this.setState({ emailContainsError: true });
        }

        if (!this.state.fullname) {
            errorMessages.push("Full Name cannot be empty.");
            this.setState({ fullnameContainsError: true });
        }

        const validateConfirmPasswordMessage = this.validateConfirmPassword(this.state.password, this.state.repassword);
        if (validateConfirmPasswordMessage) {
            errorMessages.push(validateConfirmPasswordMessage);
            this.setState({ passwordContainsError: true, repasswordContainsError: true });
        }

        const validatePasswordMessage = validatePassword(this.state.password);
        if (validatePasswordMessage) {
            errorMessages.push(validatePasswordMessage);
            this.setState({ passwordContainsError: true });
        }

        if (errorMessages.length > 0) {
            this.setState({ errorMessages });
            return false;
        }

        return true;
    }

    handleClick = () => {
        console.log("clicked");
        this.props.dispatch({ type: "TEST_DISPATCH" });
        if (this.validateInputs()) {
            this.props.dispatch(USER_ACTIONS.signUpUserIfNeeded({
                userid: this.state.email,
                name: this.state.fullname,
                password: this.state.password,
                provider: 'EMAIL',
                sourceDeviceID: uuid(),
                sourceDeviceType: uuid(),
                avatar: this.state.avatar
            }));
        }
        console.log(this.state);
    }

    renderErrorMessasge = () => (
        <ErrorMessages errorMessages={this.state.errorMessages} />
    )

    renderLoading = () => (
        <ClipLoader 
            sizeUnit={'px'}
            size={150}
            loading={this.props.isSignUp}
            />
    )

    render() {
        return (
            <div className='my-register' >        
                <div>
                    <AvatarPicker onPicked={(avatar => this.setState({ avatar }))} />
                    <label>Email:</label> <input type='email' name='email' onChange={({ target: { value } }) => this.setState({ email: value })} /> <br/>
                    <label>Full Name:</label> <input type='text' name='fullname' onChange={({ target: { value } }) => this.setState({ fullname: value })} /> <br/>
                    <label>Password:</label> <input type='password' name='password' onChange={({ target: { value } }) => this.setState({ password: value })} /> <br/>
                    <label>Confirm Password:</label> <input type='password' name='repassword' onChange={({ target: { value } }) => this.setState({ repassword: value })} /> <br/>
                    {this.renderErrorMessasge()}
                    <button onClick={this.handleClick} disabled={this.props.isSignUp} >Submit</button>
                </div>

                <p>
                    isSignUp: {this.props.isSignUp ? "true" : "false"}
                    {this.renderLoading()}
                </p>

                <p>
                    signUpErrorMessage: {this.props.signUpErrorMessage}
                </p>

                <p>
                    user: {JSON.stringify(this.props.user)}
                </p>
            </div>
        )
    }
}

export default compose(
    connect(({  
        user
    }) => ({
        user: user.data,
        isSignUp: user.isSignUp,
        signUpErrorMessage: user.signUpErrorMessage
    }))
)(MyRegister);