import React from 'react';

import { reduxForm, Field } from 'redux-form';

class SignIn extends React.Component {
    render() {
        return(
            <div className='sign-in'>
                sign in
            </div>
        )
    }
}

SignIn = reduxForm({
    form: 'SignIn'
})(SignIn);

export default SignIn;