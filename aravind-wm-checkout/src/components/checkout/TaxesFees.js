import React from 'react';
import checkoutProps from './checkout-props';
import { connect } from 'react-redux';

class TaxesFees extends React.Component {

  state = {
    cartData: {
      cartItem: {},
      itemDetails: {},
    },
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.cartData !== this.props.cartData) {
      this.setState({
        cartData: this.props.cartData
      })
    }
  }

  render() {
    return (
      <div className="row-2-col-data-right">
        <div>Estimated taxes &amp; fees</div>
        <div className="price-value">${ this.state.cartData.cartItem.taxes }</div>
      </div>
    )
  }

}

export default connect(checkoutProps)(TaxesFees);