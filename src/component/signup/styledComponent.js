import styled from "styled-components";

export const MainDiv = styled.div`
height:800px;
width:100vw;
@media screen and (min-width:768px) {
height:900px;
width:100%;
}
`

export const MainContainer = styled.div`
   position: relative;
   width: 100%;
   height: 100%;

   background-image: url("https://res.cloudinary.com/alishakhan987/image/upload/v1709927826/enhanced-image_16_s5yhqv.png");
 
    background-size: cover;
    background-position: center;
    display:flex;
    justify-content:center;
    align-items:center;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#001, #000);
        opacity: 0.5; /* Adjust the opacity as needed */
    }
    h1 {
        position: relative;
        font-size:20px;
        padding-bottom:12px;
        z-index: 1;
        text-align:center;
        color: white; /* Set the text color to contrast with the overlay */
    }
     p{
        position: relative;
        font-size:18px;
        letter-spacing:0.2rem;
        font-family:'Roboto';
        z-index: 1;
        color: white; 
      
     }

     @media screen and (min-width: 768px) {
        h1 {
            font-size: 20px; 
        }

        p {
            font-size:12px;/* Your adjusted font size for p on larger screens */;
            padding-top:12px;
        }
    }

   @media screen and (min-width:768px) {
    background-image: url("https://res.cloudinary.com/alishakhan987/image/upload/v1709927623/c596c9e2-0d6e-4bf0-b2a6-9bb275ac92e6_quetam.png")
   }

   
   border: 2px solid transparent; /* Adjust the border properties as needed */
   border-image: linear-gradient(#001, #000) 1;
`

export const FormContainer = styled.div`
   width:100%;
   background:transparent;
   border-radius:12px;
   backdrop-filter: blur(5px);
   padding:12px;
   z-index : 1;
   

   @media screen and (min-width:768px) {
    display:flex;
    justify-content:space-between;
    backdrop-filter: blur(8px);
   }

`

export const ImageContainer = styled.div`
   width:100%;
   display:flex;
   justify-content:center;
   align-items:center;
   margin-bottom:12px;

   @media screen and (min-width:768px) {
    width:40%;
    margin-bottom:none;
   }
  
`
export const Images = styled.img`
    height:180px;

    @media screen and (min-width:768px) {
        height:65%;
    }
`

export const Form = styled.form`
    width:90%;
    display:flex;
    flex-direction:column;
   

    @media screen and (min-width:768px) {
        padding-left:8px;
    }
`

export const LabelDes = styled.label`
    color: #763434;
    font-family: 'Bree-serif', sans-serif;
    font-weight: bold;
    font-size:20px;
`;
export const InputText = styled.input`
  padding:12px;
  background:transparent;
  backdrop-filter: blur(8px);
  outline:none;
  border-radius:12px;
  border: 1px solid white;
  margin-top:12px;
  width: 100%;
  color:white;

  @media screen and (min-width:768px) {
    width: 80%;
  }
`
export const FormMaindiv = styled.div`
   width:100%;
   display:flex;
   justify-content:center;
   align-items:center;

   @media screen and (min-width:768px) {
    width:45%;
   }

`

export const FieldSet = styled.fieldset`
    width:90%;
    padding:0px;
    margin:0px;
    border:1px solid white;
    box-shadow:  37px 37px 73px #8d8d8d,
             -37px -37px 73px #ffffff;
    z-index: 2;

    @media screen and (min-width:768px) {
        width:60%;
    }
`
export const LegendText = styled.legend`
   color: #a96c6c;
   font-family: "Gill Sans", sans-serif;
   font-style:cursive;
   font-size: 22px;
   font-weight: bold;
   letter-spacing: 0.2rem;  /* Corrected property name */
   padding-left: 12px;
   background-color:white;
   

   @media screen and (min-width:768px) {
    font-size: 30px;
    letter-spacing: 0.5rem;  /* Corrected property name */
    padding-left: 22px;
    color: white;
 
    background-color:#a96c6c;
   }
`;

export const Button = styled.button`
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

export const ParagraphStyling = styled.p`
   color:red;
`

export const SmallContainer2 = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:35px;
`

export const LoginPara = styled.p`
    color:#402a30;
    padding-top:25px;
    font-family: "Gill Sans", sans-serif;
    font-weight:bold;
    font-size:20px;
`
export const SmallContainer3 = styled.div`
padding:12px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    background:transparent;
    backdrop-filter: blur(8px);
   outline:none;
  border-radius:12px;
  border: 1px solid white;
  margin-top:12px;
  width: 100%;
  color:white;

  @media screen and (min-width:768px) {
    width: 80%;
  }
`
export const InputText2 = styled.input`
  background:transparent;
  outline:none;
  border:none;
  width: 80%;
  color:white;

  @media screen and (min-width:768px) {
    width: 70%;
  }
`
export const OpenEyesButton = styled.button`
    background:transparent;
    border:none;
    outline:none;

`