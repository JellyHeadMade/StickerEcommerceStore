import React from 'react';

import { reduxForm, Field } from 'redux-form';

class SignInForm extends React.Component {
    render() {
        const { className } = this.props;
        return ( 
            <form className={`${className} sign-in-form`}>
                sign in nnn
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;