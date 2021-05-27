import React from 'react';

import SignInForm from './signinForm';
import PageTitle from '../pageTitle';

class SignIn extends React.Component {

    onSubmit = (Fields) => {
        console.log(Fields);
    }

    render() {
        return(
            <div className='sign-in'>
                <PageTitle className='sign-in__page-title' title='Login' />
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
            </div>
        )
    }
}

export default SignIn;