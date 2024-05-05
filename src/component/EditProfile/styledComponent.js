
import styled from "styled-components"; 

export const CameraDiv = styled.div`
    width: 200px;
    height:200px;
    background-color:grey;
    border-radius: 100px;
   
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageDivCamera = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the entire container */
    border-radius: 100px; /* Maintain the rounded corners */
`;

export const MainEditImage = styled.div`
   height:100vh;
   background-size:cover;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;

`
export const Button = styled.button`
   background-color:blue;
   color:white;
   padding-top:12px;
   padding-bottom:12px;
   padding-right:18px;
   padding-left:18px;
   margin-top:30px;
   cursor:pointer;
`