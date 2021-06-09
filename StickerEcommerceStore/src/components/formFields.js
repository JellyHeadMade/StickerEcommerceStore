import React from 'react';

export class FormField extends React.Component {
    render() {
        const { className, title, type, placeholder, input } = this.props;
        return(
            <div className={`${className} form-input`}>
                <label className='form-input__label'>{title}</label>
                <input className='form-input__input' type={type} placeholder={placeholder} {...input} />
            </div>
        )
    }
}

export class FormButton extends React.Component {
    render() {
        const { className, title, type, onClick, input, gray } = this.props;
        return(
            <div className={`${className} form-button`}>
                <button className={`form-button__button ${gray ? 'form-button__gray-button' : ''}`} 
                    type={type}
                    {...input}
                    onClick={onClick}
                >
                    {title}
                </button>

            </div>
        )
    }
}

export class LongGrayButton extends React.Component {
    render() {
        const { className, labelTitle, title, type, onClick, input } = this.props;
        return(
            <div className={`${className} form-button-long-gray`}>
                <label className='form-button-long-gray__label'>{labelTitle}</label>
                <button className={'form-button-long-gray__button'} 
                    type={type}
                    {...input}
                    onClick={onClick}
                >
                    {title}
                </button>

            </div>
        )
    }
}