import React from 'react';
import checkoutProps from './checkout-props';
import { connect } from 'react-redux';

class DiscountSavings extends React.Component {

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
    const {savings} = this.state.cartData.cartItem;
    return (
      <div className="row-2-col-data-right">
        <div>Discount Savings</div>
        <div className="price-value">${savings}</div>
      </div>
    )
  }

}

export default connect(checkoutProps)(DiscountSavings);