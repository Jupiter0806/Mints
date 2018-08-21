import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { v1 as uuid } from 'uuid';
import { css } from 'react-emotion'; // required by react-spinners
import { HashLoader } from 'react-spinners';
import { Button } from 'react-bootstrap';

import './MyRegister.css' ;

import validateEmail from '../../helpers/validateEmail';
import validatePassword from '../../helpers/validatePassword';

import { ErrorMessages, AvatarPicker, Form, TextInput, EmailInput, PasswordInput } from '../../components';
import { USER_ACTIONS } from '../../redux/actions';

class MyRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '123@gmail.com',
            fullname: '123',
            password: '123456',
            repassword: '123456',
            avatar: null,

            errorMessages: null, // a list
            emailContainsError: false,
            fullnameContainsError: false,
            passwordContainsError: false,
            repasswordContainsError: false
        }
    }

    initialContainsErrorStatus = () => this.setState({
        errorMessages: null,
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

    renderRegisterForm = () => (
        <Form 
            inputs = {[
                <AvatarPicker onPicked={(avatar => this.setState({ avatar }))} />,
                <EmailInput label='Email:' onTextChange={email => this.setState({ email })} containsError={this.state.emailContainsError} />,
                <TextInput label="Full Name:" onTextChange={fullname => this.setState({ fullname })} containsError={this.state.fullnameContainsError} />,
                <PasswordInput label="Password:" onTextChange={password => this.setState({ password })} containsError={this.state.passwordContainsError} />,
                <PasswordInput label="Confirm Password:" onTextChange={repassword => this.setState({ repassword })} containsError={this.state.repasswordContainsError} />,
                <div>{((this.state.errorMessages && this.state.errorMessages.length > 0) || this.props.signUpErrorMessage) && this.renderErrorMessasge()}</div>
            ]}
            buttons = {[
                <Button style={{ width: '35%' }} bsStyle='primary' onClick={this.handleClick} disabled={this.props.isSignUp} >Submit</Button>

            ]}
            />
    )

    renderErrorMessasge = () => (
        <ErrorMessages errorMessages={this.state.errorMessages || [this.props.signUpErrorMessage]} />
    )

    renderLoading = () => (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50%'
        }}>
            <HashLoader 
                sizeUnit={'px'}
                size={90}
                loading={this.props.isSignUp}
                color='#4e6f54'
                />
        </div>
        
    )

    render() {
        return (
            <div className='my-register' >        
                {!this.props.isSignUp && !this.props.user.hasLoggedIn && this.renderRegisterForm()}
                {this.props.isSignUp && this.renderLoading()}

                {/* <p>
                    isSignUp: {this.props.isSignUp ? "true" : "false"}
                </p>

                <p>
                    signUpErrorMessage: {this.props.signUpErrorMessage}
                </p>

                <p>
                    user: {JSON.stringify(this.props.user)}
                </p> */}
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