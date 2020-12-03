import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles'; 

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) =>{
    console.log('here is the isLoading', isLoading)
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps}/>
    );
}

export default WithSpinner;