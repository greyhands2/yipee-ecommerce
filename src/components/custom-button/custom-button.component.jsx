import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ({children, click, isGoogleSignIn, inverted, ...otherProps}) => {

   return  <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={click} {...otherProps}>
       {children}
    </button>
}


export default CustomButton;