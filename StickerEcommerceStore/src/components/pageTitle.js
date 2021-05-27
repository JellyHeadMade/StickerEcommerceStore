import React from 'react';

class PageTitle extends React.Component{
    render(){
        const { className, title } = this.props;
        return(
            <div className={`${className} page-title`}>
                {title}
            </div>
        )
    }
}

export default PageTitle;