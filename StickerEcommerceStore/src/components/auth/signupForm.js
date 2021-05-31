import React from 'react';

import { reduxForm, Field } from 'redux-form';
import Details from '../details';

import { FormField, FormButton } from '../formFields';

import history from '../../history';

class SignUpForm extends React.Component {
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
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field className='sign-up-form__name' 
                type='name'
                name='Name'
                placeholder='Name'
                title='name'
                component={FormField} />
                <Field className='sign-up-form__email' 
                type='email'
                name='email'
                placeholder='Email'
                title='Email'
                component={FormField} />
                <Field className='sign-up-form__password' 
                type='password'
                name='password'
                placeholder='Password'
                title='Password'
                component={FormField} />
                <Field className='sign-up-form__confirm-password' 
                type='password'
                name='Confirm Password'
                placeholder='Confirm Password'
                title='confirm'
                component={FormField} />




                <div className='sign-up-form__line'></div>
                <Field className='sign-up-form__login'
                onClick={() => console.log('trying to submint')}
                type='submit'
                title='Login'
                name='Login'
                component={FormButton}/>
                <Field className='sign-up-form__back'
                onClick={() => console.log('trying to go back')}
                type='button'
                title='Back'
                name='Back'
                gray={true}
                component={FormButton}/>

                <Details className='sign-up-form__details' title='QuickLinks' links={links}/>
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;