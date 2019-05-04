import React from 'react';
import checkoutProps from './checkout-props';
import { connect } from 'react-redux';

class Total extends React.Component {

  state = {
    cartData: {
      cartItem: {},
      itemDetails: {},
    },
    total: 0,
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.cartData !== this.props.cartData) {
      this.setState({
        cartData: this.props.cartData,
      })
    }
  }

  render() {
    return (
      <div className="row-2-col-data-right margin-top-10 margin-bottom-10">
        <div className='text-total'>Est. total</div>
        <div className="price-value">${ this.state.cartData.cartItem.total }</div>
      </div>
    )
  }

}

export default connect(checkoutProps)(Total);