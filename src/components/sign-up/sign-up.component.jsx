import React, {useState} from 'react';
import {connect} from 'react-redux';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signUpStart} from '../../redux/user/user.actions';

const SignUp = ({emailSignUpStart}) => {
    const [userData, setUserData] = useState({
        displayName:'',
        email: '',
        password:'',
        confirmPassword:''
    });
    let {displayName, email, password, confirmPassword} = userData;
    const handleSubmit = async (event)=>{
        
        event.preventDefault();
        
        if(password !== confirmPassword){
            alert('passwords do not match');
            return;
        }
         
        emailSignUpStart({displayName, email, password});
       
    };

   const handleChange = (event) =>{
        const { name, value} = event.target;
        

        setUserData({ ...userData, [name]: value });
    }

    
       
        
        return(
            <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
                <form onSubmit={ handleSubmit}>
                  <FormInput name='displayName' type='text' 
                  value={displayName}
                  handleChange={handleChange} label='username' required/> 

                  <FormInput name='email' type='email' 
                  value={email}
                  handleChange={handleChange} label='email'  required/> 

                  <FormInput name='password' type='password' 
                  value={password}
                  handleChange={handleChange} label='password' required/>

                  <FormInput name='confirmPassword' type='password' 
                  value={confirmPassword}
                  handleChange={handleChange} label='confirm password' required/>



                  <CustomButton type='submit'>Register</CustomButton>
                </form>


            </div>
        );
    
}

const mapDispatchToProps=(dispatch) => ({
    emailSignUpStart: ({displayName, email, password}) => dispatch(signUpStart({displayName, email, password}))
})


export default connect(null, mapDispatchToProps)(SignUp);