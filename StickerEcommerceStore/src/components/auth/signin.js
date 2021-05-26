import React from 'react';
import SignInForm from './signinForm';

class SignIn extends React.Component {
    render() {
        return(
            <div className='sign-in'>
                <SignInForm className='sign-in__form' />
            </div>
        )
    }
}

export default SignIn;