import React, { Component } from 'react';
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom'
import {
    LoginMainContainer, LoginSmallContainer, LoginHeading, FormContainer,
    ImageContainer, Image, FormSmallcontainer2, Form, InputContainer, Input2, Placeholder, Lable, Button2, Paragraphlogin , ErrorMsg , StyLink
} from './styledComponent';

class LoginPage extends Component {
    state = { email: "", password: "", showerrMsg: false, errMsg: '' }

    inputField = event => {
        this.setState({ email: event.target.value })
    }

    passwordField = event => {
        this.setState({ password: event.target.value })
    }

    onSubmitSuccess = (jwtToken , username , email) => {
      
        const { history } = this.props;
        Cookies.set('jwt_token', jwtToken, {
            expires: 30,
            path: '/',
        })
        localStorage.setItem('email' , email);
        history.replace('/')
        toast("Login Successfully")
      
    }

    onSubmitFailure = (errMsg) => {
        console.log(errMsg)
        this.setState({ showerrMsg: true, errMsg })
        toast("Something Went Wrong")
    }

    LoginSubmit = async (event) => {
        event.preventDefault();
    
        // Ensure that username and password are not undefined
        if (!this.state.email || !this.state.password) {
            console.error('Invalid username or password:', this.state.email, this.state.password);
            return;
        }
    
        const userDetails = {
            email: this.state.email,
            password: this.state.password
        };
    
        const url = "https://fashionwebbackend.onrender.com/login";
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
        
            if (response.ok) {
                this.onSubmitSuccess(data.jwtToken);
            } else {
                const errorMsg = data.error_msg || 'Invalid credentials';
                this.onSubmitFailure(errorMsg);
            }
        } catch (error) {
            console.error("Error during login:", error);
            this.setState({ showerrMsg: true, errMsg: 'An unexpected error occurred. Please try again later.' });
        }
    };
    

    render() {
        const { email, password, showerrMsg, errMsg } = this.state
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
            return <Redirect to="/" />
        }
        return (
            <LoginMainContainer>
                <LoginSmallContainer>
                    <LoginHeading>Login </LoginHeading>
                    <FormContainer>
                        <ImageContainer>
                            <Image src="https://res.cloudinary.com/alishakhan987/image/upload/v1709971312/undraw_authentication_re_svpt_qieqsa.svg" />
                        </ImageContainer>
                        <FormSmallcontainer2>
                            <Form onSubmit={this.LoginSubmit}>
                                <InputContainer>
                                    <Lable>EMAIL</Lable>
                                    <Input2 type="text" placeholder="Enter your email" as={Placeholder} onChange={this.inputField} value={email} />
                                </InputContainer>

                                <InputContainer>
                                    <Lable>PASSWORD</Lable>
                                    <Input2 type="password" placeholder="Enter your password" as={Placeholder} onChange={this.passwordField} value={password} />
                                </InputContainer>
                                <Button2 type="submit">Submit</Button2>
                                {showerrMsg && <ErrorMsg>{errMsg}</ErrorMsg>}
                                <Paragraphlogin>Don't have an account? <StyLink to="/register">Signup</StyLink></Paragraphlogin>
                            </Form>

                        </FormSmallcontainer2>


                    </FormContainer>
                </LoginSmallContainer>
            </LoginMainContainer>
        )
    }
}

export default LoginPage