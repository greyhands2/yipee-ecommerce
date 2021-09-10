import React,{useState} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect' 

import {loading} from '../../redux/globals/global.selector'
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import Spinner from '../../components/spinner/spinner.component'

const SignInAndSignUpPage = ({loading}) =>{
    

    if(!!loading)   return  <Spinner />;

    else return <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>;


} 

const mapState2Props=createStructuredSelector({
    loading
})

export default connect(mapState2Props)(SignInAndSignUpPage);