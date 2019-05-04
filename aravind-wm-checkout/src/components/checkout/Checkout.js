import React from 'react';
import { connect } from 'react-redux';
import checkoutProps from './checkout-props';
import { LoadingImage, HR } from '../framework';
import Subtotal from './Subtotal';
import PickupSavings from './PickupSavings';
import TaxesFees from './TaxesFees';
import Total from './Total';
import Details from './Details';
import Promo from './Promo';
import DiscountSavings from './DiscountSavings';
import { apiServiceCall } from '../../store/actions/apiServiceCall';

class Checkout extends React.Component {

  componentDidMount() {
    this.fetchCart();
  }

  fetchCart() {
    /* simulate a trip to the server with set timeout */
    this.props.fetchCart();
  }

  render() {
    return (
      <React.Fragment>
      <div className="checkout-header row-3-col">
        <div className="logo" />
        <div className="checkout-text">
          Checkout
        </div>
        <div className="cart-icon" />
      </div>

      <div className="cart-checkout-container">
        { this.props.isLoading ? <LoadingImage title='Loading cart...' /> : (
          <div className='fade-in'>
            <Subtotal />
            <PickupSavings />
            <DiscountSavings />
            <TaxesFees />
            <HR color="#ccc" />
            <Total />
            <Details />
            <HR color="#ccc" />
            <Promo />
          </div>
        )}
      </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => {
      dispatch(apiServiceCall())
    }
  }
}

export default connect(checkoutProps, mapDispatchToProps)(Checkout);