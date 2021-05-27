import React from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormField, FormButton } from '../formFields';

class SignInForm extends React.Component {
    render() {
        const { className, handleSubmit } = this.props;
        return ( 
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
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
                <Field className='sing-in-form__login'
                onClick={() => console.log('trying to submint')}
                type='submit'
                title='Login'
                name='Login'
                component={FormButton}/>
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;