import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({email: '', password: ''})

        }catch(e){
            console.log(e)
        }


    }


    handleChange = (event) => {
const { value, name } = event.target;
//dynamically set a state using name attribute of a form input
this.setState({[name]: value });

    }

render(){
    
    return (
<div className='sign-in'>
<h2>I already have an account</h2>
<span>Sign in with your email and password</span>

<form onSubmit={()=> this.handleSubmit}>
    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange}  label='email' required/>


    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange}  label='pasword'  required/>

    <div className='buttons'>
        <CustomButton type='submit'>
        Sign In
        </CustomButton>
        <CustomButton click={signInWithGoogle} isGoogleSignIn>
        Sign In With Google
        </CustomButton>

    </div>
</form>
</div>

    );
}

}


export default SignIn;
