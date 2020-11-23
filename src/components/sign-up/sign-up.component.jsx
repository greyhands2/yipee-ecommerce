import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayName:'',
            email: '',
            password:'',
            confirmPassword:''
        };

        
    }

    handleSubmit = async (event)=>{
        event.preventDefault();
        let {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('passwords do not match');
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({displayName:'',
            email: '',
            password:'',
            confirmPassword:''});
        }catch(e){
            console.log(e)
        }
       
    };

   handleChange = (event) =>{
        const { name, value} = event.target;
        

        this.setState({[name]: value });
    }

    render(){
        let {displayName, email, password, confirmPassword} = this.state;
        
        return(
            <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
                <form onSubmit={ this.handleSubmit}>
                  <FormInput name='displayName' type='text' 
                  value={displayName}
                  handleChange={this.handleChange} label='username' required/> 

                  <FormInput name='email' type='email' 
                  value={email}
                  handleChange={this.handleChange} label='email'  required/> 

                  <FormInput name='password' type='password' 
                  value={password}
                  handleChange={this.handleChange} label='password' required/>

                  <FormInput name='confirmPassword' type='password' 
                  value={confirmPassword}
                  handleChange={this.handleChange} label='confirm password' required/>



                  <CustomButton type='submit'>Register</CustomButton>
                </form>


            </div>
        );
    }
}
export default SignUp;