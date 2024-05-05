import styled from "styled-components";
import {Link} from 'react-router-dom'

export const LoginMainContainer = styled.div`
    background-image:url("https://res.cloudinary.com/alishakhan987/image/upload/v1710370543/Designer_67_vadx9s.png");
    height:100vh;
    background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;

`

export const LoginSmallContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    background:transparent;
    border:2px solid white;
    width:90%;
    border-radius:12px;
    backdrop-filter: blur(8px);
    padding:18px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 1;

   @media screen and (min-width:768px){
      width:60%;
      display:flex;
      flex-direction:row;
      justify-content:center;
   }

`
export const LoginHeading = styled.h1`
    color:white;
    font-family: "Gill Sans", sans-serif;
    font-weight:bold;
    font-size:40px;
    text-align:center;
`

export const FormContainer = styled.div`
   display:flex;
   flex-direction:row;
   justify-content:space-between;
   width:100%;
`

export const ImageContainer = styled.div`
   display:none;
   
   
   @media screen and (min-width:768px) {
      display:flex;
      justify-content:center;
      align-items:center;
      width:40%;
    }
   
`

export const Image = styled.img`
    display:none;

    @media screen and (min-width:768px) {
      display:flex;
      height:65%;
    }
`

export const FormSmallcontainer2 = styled.div`
   width: 100%;
   display:flex;
   justify-content:center;
   align-items:center;
   


   @media screen and (min-width:768px) {
      width: 50%;
    }

  
`
export const Form = styled.form`
    width:90%;
    display:flex;
    flex-direction:column;
   
    padding:15px;
    border-radius:12px;

    @media screen and (min-width:768px) {
      border:2px solid white;
    }

`
export const InputContainer = styled.div`
   margin-bottom:55px; 
   display:flex;
   flex-direction:column;
`
export const Input2 = styled.input`
   width:100%;
   padding:12px;
   margin-top:18px;
   border-radius:8px;
   border-top:none;
   border-left:none;
   border-right:none;
   border-bottom:4px solid #f0d8d6;
   background-color:transparent;
   outline:none;
   color:white;
   `
   export const Placeholder = styled.input`
   &::placeholder {
       color: white;
       font-size: 18px;
   }

   @media screen and (min-width:768px) {
      color:black
   }
`;

export const Lable = styled.label`
   color:white;
   font-weight:bold;
`
export const Button2 = styled.button`
  background-color:#92544b;
  color:white;
  font-family: 'monospace';
   font-size: 19px;
  width:40%;
  padding: 12px  15px  12px 15px;
  border:0px;
  border-radius: 12px;
  outline:none;
  cursor:pointer;

`
export const Paragraphlogin = styled.p`
   color: white;
   padding-top:12px;
`

export const ErrorMsg = styled.p`
   color:red;
   font-size:15px;
   font-family:'Roboto';
`

export const StyLink = styled(Link)`
    color:grey;
`