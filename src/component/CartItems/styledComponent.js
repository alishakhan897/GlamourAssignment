import styled from "styled-components";

export const List = styled.li`
    list-style-type:none;
    display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0px 4px 16px 0px #eaebed;

  @media screen and (min-width:768px) {
    margin-bottom:32px;
    padding-left: 36px;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-right: 48px;
  }

`

export const ImageDetailed = styled.img`
width: 96px;
height: 96px;
border-radius: 4px;
`

export const CartItemDetailed = styled.div`
margin-left: 16px;

@media screen and (min-width:576px) {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
}
`
export const CartItemProductDetail = styled.div`

    @media screen and (min-width:768px) {
        width: 250px;
    }

`
export const CardProductTitle = styled.p`
    color: #171f46;
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0;

@media screen and (min-width:768px) {
    font-size: 16px;
}
`

export const CardQuantityContainer = styled.div`
    display: flex;
    align-items: center;
`

export const ButtonController = styled.button`
    padding:0px;
    border:none;
`
export const CartQuantity = styled.p`
color: #52606d;
font-family: 'Roboto';
font-size: 12px;
font-weight: 500;
margin: 8px;
line-height: 1.3;

@media screen (min-width:768px) {
    font-size: 18px;
    margin-left: 16px;
    margin-right: 16px;
}
`

export const TotalPrice = styled.div`
display: flex;
align-items: center;
`

export const CartTotalPrice = styled.p`
color: #0b69ff;
font-family: 'Roboto';
font-size: 16px;
font-weight: 500;
margin-top: 0;
margin-bottom: 0;
min-width: 100px;
`

export const RemoveButton = styled.button`
background-color: transparent;
color: #334155;
font-family: 'Roboto';
font-size: 10px;
line-height: 16px;
border: none;
outline: none;
cursor: pointer;

@media screen and (min-width:768px) {
    display: none;
}

`

export const Delete = styled.button`

    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 32px;

    @media screen and (max-width:767px) {
        display:none;
    }
  
`