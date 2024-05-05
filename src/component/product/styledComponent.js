import styled from "styled-components"; 

export const ProductMainDiv = styled.div`
   display:flex;
   flex-direction:column;
   width:100%;
   margin-top:34px;

   @media screen and (min-width:768px) {
      flex-direction:row;
    
   }
`
export const CategoryDiv = styled.div`
   width:100%;
   display:flex;
   flex-direction:row;
   justify-content:space-between;
   flex-wrap:wrap;
   

   @media screen and (min-width:768px) {
      width:40%;
      height:100vh;
      display:inline;
   }
`
export const ProductSection = styled.div`
   width:100%;
   background-color:#D3D3D3;
   height:100vh;
   padding-left:25px;
   overflow:auto;
   
   @media screen and (min-width:768px) {
      padding-left:45px;
   }

`
export const SearchDiv = styled.div`
   background-color:white;
   display:flex;
   justify-content:space-around;
   margin-top:45px;
   width:80%;
   
   
   border-radius:12px;

   @media screen and (min-width:768px) {
      width:25%;
   }
`
export const Input = styled.input`
   width:65%;
   outline:none;
   border:none;
   background-color:transparent;
   font-size:18px;
   padding:15px;
`
export const IconDiv = styled.div`
   background-color:#D3D3D3;
   padding:12px;
   display:flex;
   flex-grow:0;
`
export const ProductUl = styled.ul`
   width:100%;
   margin:0px;
   padding:0px;
   display:flex;
   flex-wrap:wrap;
   margin-top:65px;
 
   align-items:center;
   margin-left: 0;

   @media screen and (min-width:768px) {
      gap:2.3rem;
      justify-content:flex-start;

   }
`

export const Empty = styled.div`
   width:100%;
   display:flex;
   justify-content:center;
   align-items:center;

`
export const SmallEmptyDiv = styled.div`
   width:60%;
   margin:auto;
   display:flex;
   flex-direction:column;
   align-items:center;

`

export const ImageEmpty = styled.img`
     height:50vh;

`
export const Noresult = styled.p`
     color:red;
     padding-top:12px;
     font-size:20px;

`
export const BuutonNoResult = styled.button`
    background-color:#58A0C6;
    border-radius:8px;
    outline:none;
    padding-top:12px;
    padding-bottom:12px;
    padding-right:15px;
    padding-left:15px;
    border:none;
    color:white;
    margin-top:18px;

`