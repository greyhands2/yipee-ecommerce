import styled, {css} from 'styled-components';

const buttonStyles = css`

    background-color: #ec407a;
    color: #ffffff;
    border: none;
    &:hover {
        background-color: #ffffff;
        color: #ec407a;
        border: 1px solid #ec407a;
    }
    

`;


const invertedButtonStyles = css`


        background-color: #ffffff;
        color: #ec407a;
        border: 1px solid #ec407a;
        &:hover{
           background-color:#ec407a;
           color:white;
           border: none; 
        }
    

`;  


const googleSignInStyles = css`

        background-color: #4285f4;
        color: white;
        &:hover{
            background-color: #357ae8;
            border: none;
        }



`;

const collectionButtonStyles = css`

width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 255px;
      display: none;

`;


const getButtonStyles = props =>{
    if(props.isGoogleSignIn){
        return googleSignInStyles;
    }
   

    return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`

    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 12px;
    text-transform: uppercase;
    font-family: 'mono';
    font-weight: bolder;
    
    outline:none;
    cursor: pointer;
    box-shadow: none;
    display: flex;
    justify-content: center;
    border-radius:  20px;
    &:focus {
        outline: none;
        border: none;
        box-shadow: none;
    }
   
    ${getButtonStyles}
`;




