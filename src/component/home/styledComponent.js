import styled from "styled-components";


export const HomePageMainContainer = styled.div`
    background-image:url("https://res.cloudinary.com/alishakhan987/image/upload/v1710014372/Fashion1_jodthv.png");
    height:100vh;
    background-size:cover;
    padding-top:45px;
    padding-left:65px;
    object-fit:contain;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (min-width:768px) {
        background-image:url("https://res.cloudinary.com/alishakhan987/image/upload/v1710243524/enhanced-image_27_btzoez.png");
    }
    
`
export const HeadingElem = styled.h1`
   color:white;
   font-size:35px;
   font-weight:bold;
   padding-bottom:35px;
   text-align:center;
 
   @media screen and (min-width:768px) {
    width:100%;
    font-size:95px;
    text-align:start;
   }
`

export const ParaElem = styled.p`
    
    color:white;
    font-size:25px;
    font-weight:bold;
    font-family:'Roboto';
    text-align:center;

    @media screen and (min-width:768px) {
        width:80%;
        font-size:35px;
        text-align:start;
       
    }
`
export const Collection = styled.div`
    width:100%;
    padding-top:45px;
    padding-left:20px;
    margin-bottom:45px;
`

export const CollectionHeading = styled.h1`
    color: #c79691;
    font-family:'Roboto';
    font-size:60px;
    padding-bottom:30px;
` 

export const CollectionSmallCard = styled.ul`
    width:100%;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    margin:0px;
    padding:0px;
    list-style-type:none;

    @media screen and (min-width:768px) {
      justify-content:space-between;
    }
   

`

export const CardContainer = styled.div`
  width: 90%;
  height: 300px;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  transition: z-index 0.3s;
  margin-bottom: 30px;

  &:hover,
  &:focus {
    z-index: 2;
  }

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }
`;


export const CardImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  transition: scale 0.6s, rotate 0.6s, filter 1s;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
`;

export const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  color: #e8e8e8;
  padding: 20px;
  line-height: 1.5;
  border-radius: 5px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  z-index: 1;

  ${CardContainer}:hover &,
  ${CardContainer}:focus & {
    transform: translateY(0);
    opacity: 1;
  }

  .heading {
    font-size: 42px;
    font-weight: 800;
  }
  .para {
    font-size: 30px;
  }
`;

export const SecondCollection = styled.div`
    height:800px;
    width:100vw;
   @media screen and (min-width:768px) {
    height:900px;
    width:100%;
   }
    
`

export const SecondCollection2 = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url("https://res.cloudinary.com/alishakhan987/image/upload/v1710094745/Fashion12_moxoul.png");
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
        opacity: 0.7; /* Adjust the opacity as needed */
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
        text-align:center;
     }

     @media screen and (min-width: 768px) {
        h1 {
            font-size: 40px; 
        }

        p {
            font-size:35px;/* Your adjusted font size for p on larger screens */;
            padding-top:12px;
        }
    }

    border: 2px solid transparent; /* Adjust the border properties as needed */
    border-image: linear-gradient(#001, #000) 1;
`;

export const TopContainer = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   background:transparent;
   backdrop-filter: blur(8px);
    @media screen and (min-width:768px) {
        width:40%;
        align-items:flex-start;
   
    }
`

export const MakeCenter = styled.div`
  
    width:80%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    pointer-events: none;
   transform: translateY(80px);
   transition: all 0.8s cubic-bezier(0.23, 1, 0.320, 1);
   z-index: 1;
   ${SecondCollection2}:hover & {
     transform: translateY(0);
     opacity: 1;
   }
   @media screen and (min-width:768px) {
       width:50%;
   }
    
`

export const WhyChooseusmain = styled.div`
   min-height:100vh;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
  
   
`

export const WhyChooseSmallContainer = styled.div`
     display:flex;
     flex-direction:column;
     width:100%;
     margin-top:45px;
     justify-content:space-around;
    @media screen and (min-width:768px) {
        flex-direction:row;
    }
    
`
export const Div1 = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center; 
    gap:4.3rem;
   
    @media screen and (min-width:768px) {
        width: 50%;
        flex-direction:column;
        justify-content:space-between;
    
   }
  
`

export const Div1Shopping = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 240px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 2px solid #8e4656;
    overflow: hidden;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.1); /* Increase the scale on hover */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add box shadow on hover */
      }

    @media screen and (min-width: 768px) {
        width: 60%;
        height: 85%;
    }
`;
export const Iconbackground = styled.div`
    border-radius:100%;
    padding:1vh;
    margin-top:2vh;
    background-color:#f0d8d6;
    opacity:0.5px;

    @media screen and (min-width:768px) {
        padding:2vh;
    }
`
export const IconPara1 = styled.p`
   
    color:#b89132;
    font-weight:bold;
    font-family:'Roboto';
    font-size:0.8rem;
    padding-top:1vh;
    text-align:start;

    @media screen and (min-width:768px) {
        padding-top:12px;
        font-size:4vh;
        width:90%;
        
    }

`
export const TitleDiv = styled.div`
    width:80%;
    margin:auto;

    @media screen and (min-width:768px) {
        width:90%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`
export const IconPara2 = styled.p`
    
    color:#93a4a7;
    font-weight:bold;
    font-family:'Roboto';
    font-size:0.7rem;
    text-align:start;
   

    @media screen and (min-width:768px) {
        padding-top:12px;
        font-size:3vh;
        width:90%;
    }

`
export const Div2 = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    @media screen and (min-width:768px) {
        width: 20%;
        
    }
   
`

export const LogoDiv = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    @media screen and (min-width:768px) {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.1); /* Increase the scale on hover */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add box shadow on hover */
      }
    }
    

`
export const WhyChooseHeading = styled.h1`
    color:#8e4656;
    font-size:50px;
    font-family:'Roboto';
    font-weight:bold;
    text-align:center;
`


export const LandingPageMain = styled.div`
   margin-top:15px;
   height:580px;
   width:100vw;
   @media screen and (min-width:768px) {
     height:600px;
     width:100%;
     margin-top:45px;

   
`

export const LandingPageDiv = styled.div`
    background-image:url("https://res.cloudinary.com/alishakhan987/image/upload/v1710339941/Conatct2_ugkn26.png");
    position: relative;
    width: 100%;
    height: 100%;
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
        opacity: 0.7; /* Adjust the opacity as needed */
    }

    h1 {
        position: relative;
        font-size:20px;
        font-family:'Roboto';
        padding-bottom:12px;
        z-index: 1;
        text-align:center;
        color: Black; /* Set the text color to contrast with the overlay */
    }

    @media screen and (min-width: 768px) {
        h1 {
            font-size: 40px; 
        }

        p {
            font-size:35px;/* Your adjusted font size for p on larger screens */;
            padding-top:12px;
        }
    }


   

     border: 2px solid transparent; /* Adjust the border properties as needed */
     border-image: linear-gradient(#001, #000) 1;
`

export const ContactUsDiv = styled.div`
   width:90%;
   margin:auto;
   display:flex;
   flex-direction:column;
   background-color:white;
   margin-top:15px;
   margin-bottom:15px;
   margin-left:25px;
   padding:12px;
   padding-bottom:45px;
   border-radius:15px;
   z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Set a lower z-index to be below the ContactHaeding */
  }

  @media  screen and (min-width:768px) {
    width:50%;
    margin: 0;
    
  }

`

export const ContactHaeding = styled.h1`
   font-size: 18px;
   font-weight: bold;
   position: absolute;
   top: 0px; /* Adjust the top position as needed */
   left: 0px; /* Adjust the left position as needed */
   z-index: 2; /* Ensure it's above the ContactUsDiv */

   @media screen and (min-width:768px) {
      font-size:38px;
   }
`;

export const ContactFrom = styled.form`
   width:90%;
   margin:auto;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   margin-top:25px;
   text-align: start;
  

   @media screen and (min-width:768px) {
     width:70%;
   }

`

export const LabelForm = styled.label`
  color: black;
  font-size: 15px;
  font-weight: bold;

  @media screen and (min-width:768px) {
    font-size: 20px;
  }
  
`;

export const PutLableForm = styled.div`
   display:flex;
   flex-direction:column;
   width:100%;
  

`

export const InputForm = styled.input`
   padding:10px;
   width:100%;
   background-color:#E5E4E2;
   border:none;
   margin-top:12px;
   border-radius:8px;
   margin-bottom:15px;
   font-family:'Roboto';
   font-weight:bold;
   outline:none;

   @media screen and (min-width:768px) {
      padding:18px;
      
   }

`

export const DescriptionDiv = styled.textarea`
padding:12px;
width:100%;
background-color:#E5E4E2;
border:none ;
margin-top:12px;
border-radius:8px;
font-family:'Roboto';
font-weight:bold;
outline:none;


`
export const LogoImage = styled.img`
    height:100%;
    width:150px;

    @media screen and (min-width:768px) {
       width:100%;
      
        
    }
`


export const ContactSubmitButton = styled.button`
    background-color:#808080;
    width:40%;
    color:white;
    padding-top:12px;
    padding-bottom:12px;
    padding-left:15px;
    padding-right:15px;
    border:0px;
    margin-top:35px;
    border:10px;

`
export const ErrText = styled.p`
   font-size:18px;
   color:red;
   text-align:start;
`
export const FooterSection = styled.div`
    height:10vh;
    background-color:#5E5E5E;
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   
`
export const FooterSmallDiv = styled.div`
     width:50%;
    
     display:flex;
     flex-direction:row;
     justify-content:space-between;

     @media screen and (min-width:768px) {
        width:20%;
     }


`

export const Bg = styled.span`
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: #181818;
  z-index: 0;
  border-radius: 10px;
  pointer-events: none;
  transition: all 0.3s;
`;

export const Span = styled.span`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  letter-spacing: 0.8px;
  border-radius: 10px;
  transition: all 0.3s;
 
`;

export const ButtonFooter = styled.button`
  position: relative;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  border-radius: 7px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    ${Span} {
      background-color: rgba(156, 156, 156, 0.466);
    }

    ${Bg} {
      transform: rotate(35deg);
      transform-origin: bottom;
    }
  }
`;


export const LastPage = styled.div`
   background-color:#2f2f2f;
   height:10vh;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;

`
export const SecondLastPage = styled.div`
   width:100%;
   display:flex;
   flex-direction:column;
   align-items:center;
   letter-spacing:2px;
   @media screen and (min-width:768px) {
    width:50%;
   }
`

export const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color:white;

  @media screen and (min-width:768px) {
    letter-spacing:0.2rem;
  }
 
`;

