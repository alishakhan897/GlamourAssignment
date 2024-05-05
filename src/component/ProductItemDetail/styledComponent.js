import styled from "styled-components";

export const StyledMainDiv = styled.div`
    width:95%;
    padding:25px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    margin-top:45px;
    overflow:auto;

    @media screen and (min-width:768px) {
        justify-content: space-between;
        flex-direction:row;
        padding-top: 45px;
        padding-bottom: 45px;
    }
`

export const ImageDetailed = styled.div`
    width:80%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width:768px) {
        width:50%;
    }
`

export const Imageheight = styled.img`
width: 100%;
border-radius: 12px;
margin-top:34px;

@media screen and (min-width:768px) {
    height:100%;
    border-radius:20px;
}
`
export const DetailedMainDiv = styled.div`
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const DetailedContainer = styled.div`
width: 80%;
padding: 0px;
margin-top: 0px;
padding-left: 5px;
@media screen and (min-width:768px) {
    width:48%;
}
` 
export const Rspara = styled.div`
color: #12022f;
  font-weight: bold;
  font-size: 20px;
  padding-top:25px;
`

export const ButtonDiv = styled.div`
display: flex;
margin-top:20px;
`

export const ButtonDetailed = styled.button`
background-color: #3b82f6;
border: 0px;
outline: 0px;
display:flex;
justify-content:space-between;
align-items:center;
gap:0.5rem;
padding-right: 20px;
padding-left: 20px;
padding-top:12px;
padding-bottom:12px;
border-radius: 8px;
color: white;
margin-right: 19px;

`
export const Des = styled.p`
   margin-top:20px;
`
export const AvailablePara = styled.p`
   font-family: Roboto;
   font-size: bold;
   color: #12022f;
   font-size:20px;
   font-weight:bold;
   padding-top:25px;
   padding-bottom:25px;
`

export const BsDesign = styled.div`
display: flex;
width:30%;
justify-content:space-between;
margin-top:30px;
margin-bottom:20px;
`
export const Button2 = styled.button`
background-color: #3b82f6;
border: 0px;
outline: 0px;
padding-top: 10px;
padding-bottom: 10px;
padding-right: 20px;
padding-left: 20px;
border-radius: 8px;
color: white;
margin-right: 19px;
cursor:pointer;
`
export const SimiliarProductDiv = styled.div`
    width:95%;
    display:flex;
    flex-wrap:wrap;
    gap:1.8rem;
    padding:25px;
` 

export const ImageDetailed2 = styled.div`
    width:90%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;

    @media screen and (min-width:768px) {
        width:30%;
    }
`
export const Imageheight2 = styled.img`
width: 100%;
border-radius: 12px;
margin-top:34px;

@media screen and (min-width:768px) {
    height:100%;
    border-radius:20px;
}
`
export const HeadingDiv = styled.div`
    display:flex;
    alignitems:center;
    justify-content:center;
    width:100%;
  

`