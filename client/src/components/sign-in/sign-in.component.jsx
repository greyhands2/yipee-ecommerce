import React, {useState} from 'react';
import {connect} from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
const SignIn =({signInEmail, signInGoogle,setLoading})=>{
    
   const [userCredentials, setUserCredentials] = useState({email: '', password: ''}); 

   const {email, password} = userCredentials;
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(prev => !prev);
        signInEmail(email, password);

    }


    const handleChange = (event) => {
const { value, name } = event.target;
//dynamically set a state using name attribute of a form input
setUserCredentials({ ...userCredentials, [name]: value });

    }


    
    return (
<div className='sign-in'>
<h2>I already have an account</h2>
<span>Sign in with your email and password</span>

<form onSubmit={handleSubmit}>
    <FormInput name='email' type='email' value={email} handleChange={handleChange}  label='email' required/>


    <FormInput name='password' type='password' value={password} handleChange={handleChange}  label='pasword'  required/>

    <div className='buttons'>
        <CustomButton type='submit'>
        Sign In
        </CustomButton>
        <CustomButton type='button' onClick={signInGoogle} isGoogleSignIn>
        Sign In With Google
        </CustomButton>

    </div>
</form>
</div>

    );


}

const mapDispatchToProps =dispatch=>({
    signInGoogle: () => dispatch(googleSignInStart()),
    signInEmail: (email, password) => dispatch(emailSignInStart({email,password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
