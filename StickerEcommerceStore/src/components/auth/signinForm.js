import React from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormField } from '../formFields';

class SignInForm extends React.Component {
    render() {
        const { className } = this.props;
        return ( 
            <form className={`${className} sign-in-form`}>
                <Field className='sign-in-form__email' 
                type='email'
                name='email'
                placeholder='Email'
                title='Email'
                component={FormField} />
                <Field className='sign-in-form__password' 
                type='password'
                name='password'
                placeholder='Password'
                title='Password'
                component={FormField} />
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;