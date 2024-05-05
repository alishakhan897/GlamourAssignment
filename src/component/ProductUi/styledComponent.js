import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ImagesProduct = styled.img`
   width:100%;
   height:75%;
   border-radius:12px;
`

export const ImageCard = styled.div`
    width:90%;
    height:500px;
    border-radius:12px;
    background-color:white;
    margin-bottom:35px;
    @media screen and (min-width:768px) {
        width:30%;
        height:550px;
    }
`

export const ImagePara = styled.p`
   color:black;
   font-family:'Roboto';
   font-size:20px;
`
export const Imagepara2 = styled.p`
color:black;
font-family:'Roboto';
font-size:25px;
font-weight:bold;
`
export const ImageParaDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:30px;
    margin-top:25px;
`
export const LinkDes = styled(Link)`
    text-decoration:none;
    color:none;
    width:100%;
  
`