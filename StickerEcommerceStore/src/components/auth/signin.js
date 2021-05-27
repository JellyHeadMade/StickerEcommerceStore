import React from 'react';
import { Fields } from 'redux-form';
import SignInForm from './signinForm';

class SignIn extends React.Component {

    onSubmit = (Fields) => {
        console.log(Fields);
    }

    render() {
        return(
            <div className='sign-in'>
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
            </div>
        )
    }
}

export default SignIn;