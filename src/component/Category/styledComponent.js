import styled from 'styled-components'

export const CategoryMain = styled.li`
    display:flex;
    width:40%;
    justify-content:space-around;
    margin-bottom:15px;
    @media screen and (min-width:768px) {
        width:100%;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }
    
`
export const ParaList = styled.p`
    font-family:'Roboto';
    font-size:15px;

    @media screen and (min-width:768px) {
        font-size:25px;
    }
    
`
export const ParaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

export const Icondiv = styled.button`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-between;
    margin-bottom:25px;
    background:transparent;
    border:none;
    outline:none;
    cursor:pointer;
    @media screen and (min-width: 768px) {
        width:50%;
        margin:auto;
        margin-bottom:25px;

    }
`
export const IconDiv2 = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:30%;
   
    
 
`
export const Bg = styled.span`
position: absolute;
content: "";
width: 100%;
height: 100%;
background: #181818;
z-index: -1;
border-radius: 10px;
pointer-events: none;
transition: all .3s;

`