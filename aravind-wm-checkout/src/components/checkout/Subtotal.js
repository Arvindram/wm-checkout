import React from 'react';
import checkoutProps from './checkout-props';
import { connect } from 'react-redux';

class Subtotal extends React.Component {

  state = {
    cartData: {
      cartItem: {},
      itemDetails: {},
      qty: '',
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
    const { qty, subtotal } = this.state.cartData.cartItem;

    return (
      <div className="row-2-col-data-right">
        <div>Subtotal { qty && <span>({qty})</span>}</div>
        <div className="price-value">${subtotal}</div>
      </div>
    )
  }

}

export default connect(checkoutProps)(Subtotal);
