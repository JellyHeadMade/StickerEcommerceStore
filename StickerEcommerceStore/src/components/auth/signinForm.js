import React from 'react';

import { reduxForm, Field } from 'redux-form';
import Details from '../details';

import { FormField, FormButton } from '../formFields';

import history from '../../history';

class SignInForm extends React.Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
        {
            _id: 0,
            title: 'Not Regiestered? Create and account here',
            onClick: () => history.push('/signup')
        },
        {
            _id: 1,
            title: 'Forgot accoutn email?',
            onClick: () => console.log('forgot email')
        },
        {
            _id: 2,
            title: 'Forgot Password?',
            onClick: () => console.log('forgot password')
        }
    ]
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
                <div className='sign-in-form__line'></div>
                <Field className='sign-in-form__login'
                onClick={() => console.log('trying to submint')}
                type='submit'
                title='Login'
                name='Login'
                component={FormButton}/>

                <Details className='sign-in-form__details' title='QuickLinks' links={links}/>
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;