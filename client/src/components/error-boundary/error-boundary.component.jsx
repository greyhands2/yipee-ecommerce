import React from 'react';

import {ErrorImageContainer, ErrorImageOverlay, ErrorImageText} from './error-boundary.styles';

import errImage from '../../assets/3suxlvm.png';
class ErrorBoundary extends React.Component {
     constructor(props){
         super(props);

         this.state={
             hasErrored: false
         }
     };
    static getDerivedStateFromError(error){
        //process the error

        return {
            hasErrored: true
        };
    }



    componentDidCatch(error, info){
        console.log(error);
    }



    render(){
        if(this.state.hasErrored){
            return (
                    <ErrorImageOverlay>
                        <ErrorImageContainer imageUrl={errImage}/>
                        <ErrorImageText>
                            Sorry This Page is Broken
                        </ErrorImageText>
                    </ErrorImageOverlay>
                )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;