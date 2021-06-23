import React from 'react';

class GreenPriceTag extends React.Component {
    render() {
        const {className, title } = this.props;
        return(
            <div className={`${className} green-price-tag`}>
                ${title}
            </div>
        )
    }
}

export default GreenPriceTag;