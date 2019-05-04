import React from 'react';
import checkoutProps from './checkout-props';
import { connect } from 'react-redux';
import { Tooltip } from '../framework';

class PickupSavings extends React.Component {

  state = {
    displayTooltip: false,
    cartData: {
      cartItem: {},
      itemDetails: {},
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if( this.state.cartData !== this.props.cartData ) {
      this.setState({
        cartData: this.props.cartData
      });
    }
  }

  hideTooltip = () => {
    this.setState({
      displayTooltip: false,
    })
  }

  showTooltip = () => {
    this.setState({
      displayTooltip: true,
    })
  }

  render() {
    const { shipping, pickupInStore } = this.state.cartData.cartItem
    return (
      <div className="row-2-col-data-right">
        <div
            onMouseOver={this.showTooltip}
            onMouseOut={this.hideTooltip}
            className="text-link">Pickup Savings
          <Tooltip display={ this.state.displayTooltip }>
              Picking up your order in the store helps cuts costs, and we pass the savings on to you
          </Tooltip>
        </div>
        <div>{ pickupInStore && (
          <span className='text-red'>${ shipping }</span>
        )}</div>
      </div>
    )
  }

}

export default connect(checkoutProps)(PickupSavings);