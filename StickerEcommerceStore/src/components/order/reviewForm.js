import React from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormButton } from '../formFields';

import history from '../../history';

class ReviewForm extends React.Component {
    render() {
        const { className, handleSubmit } = this.props;    
    
        return ( 
            <form onSubmit={handleSubmit} className={`${className} reivew-form`}>
               
                <div className='reivew-form__line'></div>
                <Field className='reivew-form__proceed'
                onClick={() => history.push('/account')}
                type='submit'
                title='Proceed to Checkout'
                name='proceed'
                component={FormButton}/>
                <Field className='reivew-form__back'
                onClick={() => history.push('/signin')}
                type='button'
                title='Back'
                name='Back'
                gray={true}
                component={FormButton}/>

            </form>
        )
    }
}

ReviewForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);

export default ReviewForm;