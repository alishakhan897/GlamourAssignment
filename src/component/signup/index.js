import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom'; 
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'
import { LiaEyeSolid } from "react-icons/lia";
import {
    MainContainer, FormContainer, ImageContainer, Images, Form, LabelDes, InputText,SmallContainer3,
    FormMaindiv,
    FieldSet,
    LegendText,
    Button,
    ParagraphStyling,
    SmallContainer2,
    LoginPara,
    MainDiv,
    InputText2,
    OpenEyesButton
} from './styledComponent.js'

class Signup extends Component {
    state = {
        username: '', password: '', email: '', showerrormssg: false,
        msg: '', nameinvalid: false, nameerrormsg: '', emailinvalid: false, emailerrormsg: '', passwordlinvalid: false,
        passerrormsg: '' ,  redirectToHome: false, openEye:false
    }

    usernameInput = event => {
        this.setState({ username: event.target.value })
    }

    emailInput = event => {
        this.setState({ email: event.target.value })
    }

    passwordInput = event => {
        this.setState({ password: event.target.value })
    }

    validateForm = () => {
        const { username, email, password } = this.state;


        if (!username.trim() || !email.trim() || !password.trim()) {
            this.setState({ showerrormssg: true, msg: 'All fields are required*' });
            return false;
        }

        if (!/^[A-Za-z\s]+$/.test(username)) {
            this.setState({ nameinvalid: true, nameerrormsg: 'Name should contain only alphabets*' });
            return false;
        }


        if (!/^[a-zA-Z]+[0-9]+@gmail\.com$/.test(email)) {
            this.setState({ emailinvalid: true, emailerrormsg: 'Invalid email address (e.g., user(0-9)@gmail.com)' });
            return false;
        }

        if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
            this.setState({ passwordlinvalid: true, passerrormsg: 'Password must contain at least one letter, one number, and one special character.' });
            return false;
        }



        return true;
    };
      

    onSubmitSuccess = () => {
       
        const { username, email, password } = this.state;
    
        const users = { username, email, password };
        localStorage.setItem("users", JSON.stringify(users));
        this.setState({ redirectToHome: true });
        toast("Sucessfully SignUp ")
       
        
    };
    


    SubmitForm = async event => {
        event.preventDefault()
        if (!this.validateForm()) {
            // If validation fails, return early
            return;
        }

        const { username, email, password } = this.state;
        const userDetails = { username, email, password }
        // In your Signup component
        const url = "https://fashionwebbackend.onrender.com/register";

        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json'
            },
           
        };

        const response = await fetch(url, options);

        try {
            const data = await response.json();
    
            if (response.ok === true) {
                this.onSubmitSuccess();
                console.log(data);
            } else {
                // Check for the specific error message from the server
                if (data.error === "Email Already Exist") {
                    this.setState({
                        showerrormssg: true,
                        msg: 'Email already exists. Please use a different email address.',
                    });
                } else {
                    // Handle other error cases if needed
                    this.setState({
                        showerrormssg: true,
                        msg: 'An error occurred. Please try again later.',
                    });
                }
            }
        } catch (error) {
            // Handle cases where the response is not valid JSON
            console.error("Error parsing JSON response", error);
            this.setState({
                showerrormssg: true,
                msg: 'An unexpected error occurred. Please try again later.',
            });
        }
       
    }

    openEyes = () => {
        this.setState(prev => ({ openEye: !prev.openEye }));
    }
    

    render() {
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
            return <Redirect to="/" />
        }
        const { username, email, password, nameinvalid, nameerrormsg, emailerrormsg
            , emailinvalid, passwordlinvalid, passerrormsg, showerrormssg, msg , redirectToHome , openEye} = this.state

            if (redirectToHome) {
                return <Redirect to="/" />;
              }
        return (
            <MainDiv>
            <MainContainer>
                <ToastContainer/>
                <FieldSet>
                    <LegendText>Sign  Up  for Exclusive Fashion Updates!</LegendText>
                    <FormContainer>
                        <ImageContainer>
                            <Images src="https://res.cloudinary.com/alishakhan987/image/upload/v1709921932/undraw_mobile_content_xvgr_zjmmwr.svg" alt="register"/>
                        </ImageContainer>
                        <FormMaindiv>
                            <Form onSubmit={this.SubmitForm}>
                                <SmallContainer2>
                                    <LabelDes>NAME</LabelDes>
                                    <InputText type="text" onChange={this.usernameInput} value={username} placeholder="Enter Your Name"/>
                                    {nameinvalid && <ParagraphStyling style={{color:'red'}}>{nameerrormsg}</ParagraphStyling>}
                                </SmallContainer2>
                                <SmallContainer2>
                                    <LabelDes>EMAIL</LabelDes>
                                    <InputText type="text" onChange={this.emailInput} value={email} placeholder="Enter Your Email"/>
                                    {emailinvalid && <ParagraphStyling style={{color:'red'}}>{emailerrormsg}</ParagraphStyling>}
                                </SmallContainer2>
                                <SmallContainer2>
                                    <LabelDes>PASSWORD</LabelDes>
                                    <SmallContainer3>
                                    <InputText2    type={openEye ? "password" : "text"}  onChange={this.passwordInput} value={password} placeholder="Enter Your Password" />
                                    <OpenEyesButton type="button"onClick={this.openEyes}>
                                {openEye ?  <FaEyeSlash size={20} color={'white'}/> : <LiaEyeSolid size={20} color={'white'}/> }  
                               </OpenEyesButton>
                                    </SmallContainer3>
                                    {passwordlinvalid && <ParagraphStyling style={{color:'red'}}>{passerrormsg}</ParagraphStyling>}
                                </SmallContainer2>
                                <Button type="submit">Submit</Button>
                                {showerrormssg && <ParagraphStyling style={{color:'red'}}>{msg}</ParagraphStyling>}

                                <LoginPara>ALREADY HAVE AN ACCOUNT ? <Link to="/login">Login</Link></LoginPara>
                            </Form>

                        </FormMaindiv>
                    </FormContainer>
                </FieldSet>
            </MainContainer>
            </MainDiv>
        );
    }
}

export default Signup;
