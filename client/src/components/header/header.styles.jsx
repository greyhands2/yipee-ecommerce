import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const LinkStyles = css`
   text-decoration: none;
   outline:0;
   &:focus, &:hover, &:visited, &:link, &:active {
      outline: 0;
   text-decoration: none;
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 0;
    margin-bottom: 20px;
    box-shadow: 0 0 11px rgba(33,33,33,.2);
    border-radius: 30px;
    &:hover {
      box-shadow: 0 0 25px rgba(33,33,33,.2);
    }
  ${'' /* position: fixed; */}
  
    @media screen and (max-width: 800px) {
          height:60px;
          padding: 10px;
          margin-bottom: 20px; 
    }
`;

export const ImageStyles = styled.img`
    height: 45px;

    @media screen and (max-width: 419px) {
        height: 30px;
     }

     @media screen and (max-width: 519px) and (min-width: 420px){
        height: 40px;
     }


     
`;

export const LogoContainer = styled(Link)`
    height: 100%;
   
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${LinkStyles}

    @media screen and (max-width: 800px) {
          width: 20px;
          padding: 0;
    } 

    
`;

export const NameContainer = styled(Link)`

    font-size: 30px;
    font-weight: 900;
    color: #FA663D;
    padding: 7px;
    ${LinkStyles}

    @media screen and (max-width: 349px) {
        font-size: 20px;
          padding: 3px;
     }

     @media screen and (max-width: 419px) and (min-width: 350px) {
        font-size: 20px;
          padding: 3px;
     }

   

     @media screen and (max-width: 519px) and (min-width: 420px){
        font-size: 20px;
          padding: 3px;
     }


     @media screen and (max-width: 619px) and (min-width: 520px){
        font-size: 22px;
          padding: 3px;
     }

     @media screen and (max-width: 719px) and (min-width: 620px){
        font-size: 24px;
          padding: 3px;
     }

     @media screen and (max-width: 819px) and (min-width: 720px){
        font-size: 28px;
          padding: 3px;
     }

 
`;


export const OptionLink = styled(Link)`
     padding: 10px 15px;
     cursor: pointer; 
     font-weight: 900;
     font-size: 20px;
     color: #707b8f;
     ${LinkStyles}
     &:hover{
         color: #ec407a;
     }


     @media screen and (max-width: 349px) {
        top: 25px;
        font-size: 15px;
        padding: 5px 9px;
     }

     @media screen and (max-width: 419px) and (min-width: 350px) {
        top: 25px;
        font-size: 16px;
     }

     @media screen and (max-width: 519px) and (min-width: 420px){
        top: 25px;
        font-size: 18px;
     }


     @media screen and (max-width: 619px) and (min-width: 520px){
        top: 25px;
        font-size: 20px;
     }

    

     
`;

export const OptionsContainer = styled.div`

    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end; 

   

    @media screen and (max-width: 419px) {
        width: 80%;
     }

     @media screen and (max-width: 519px) and (min-width: 420px){
        width: 75%;
     }


     @media screen and (max-width: 619px) and (min-width: 520px){
        width: 70%;
     }

     @media screen and (max-width: 719px) and (min-width: 620px){
        width: 65%;
     }

     @media screen and (max-width: 819px) and (min-width: 720px){
        width: 60%;
     }

`;

// export const OptionDiv = styled.div`
//     ${OptionContainerStyles}
// `;

