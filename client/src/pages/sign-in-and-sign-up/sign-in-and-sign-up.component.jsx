import React,{useState} from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import Spinner from '../../components/spinner/spinner.component'
const SignInAndSignUpPage = () =>{
    const [loading, setLoading]=useState(false);

    if(!!loading)   return  <Spinner />;

    else return <div className='sign-in-and-sign-up'>
        <SignIn setLoading={setLoading}/>
        <SignUp setLoading={setLoading}/>
    </div>;


} 

export default SignInAndSignUpPage;