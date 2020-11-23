import React from 'react';
import './custom-button.styles.scss';


const CustomButton = ({children, click, isGoogleSignIn, ...otherProps}) => {

   return  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={click} {...otherProps}>
       {children}
    </button>
}


export default CustomButton;