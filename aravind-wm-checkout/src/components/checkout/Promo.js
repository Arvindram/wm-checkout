import React from 'react';
import checkoutProps from './checkout-props';
import { connect } from 'react-redux';
import { Slide } from '../framework';
import { discountCodeAttempt } from '../../store/actions/apiServiceCall'

class Promo extends React.Component {

  state = {
    promoValue: '',
    message: '',
    disabled: false,
    className: '',
    show: false,
    cartData: {
      cartItem: {
        appliedDiscount: null
      },
      itemDetails: {},
    }
  }

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.discountAttempt !== this.props.discountAttempt){
      this.setState({
        message: <span className='wait'>looking up code...</span>,
        disabled: true,
      });
    }
    if (prevProps.codeLookupComplete !== this.props.codeLookupComplete && this.props.codeLookupComplete){
      this.applyDiscountAttempt();
    }
  }

  applyDiscountAttempt() {
    if(this.props.discountAttemptResult === 'success') {
      this.setState({
        message: <span>applied discount</span>,
        lookingUpCode: false
      });
      this.removePromoSlot();
    } else {
      this.setState({
        message: <span className='text-red'>Unknown discount</span>,
        disabled: false,
        lookingUpCode: false
      });
    }
  }

  async removePromoSlot() {
    await this.fadeOut();
    this.shrink();
  }

  fadeOut(){
    return new Promise(resolve => {
      setTimeout( ()=> {
        this.setState({
          className: 'fade-out'
        }, () => resolve());
      }, 500);
    })
  }

  shrink(){
    this.setState({
      className: 'slide-up'
    })
  }

  updateTextInput = (e) => {
    if(e.key === 'Enter') {
      this.attemptPromo();
    } else {
      this.setState({
        promoValue: e.currentTarget.value
      });
    }
  }

  attemptPromo = () => {
    this.setState({
      lookingUpCode: true
    })
    this.props.doPromoAttempt(this.state.promoValue, this.props.cartData);
  }

  render() {
    return (
      <div className={this.state.className} ref={this.ref}>
        <Slide 
          textToDisplay="Apply Promo Code"
          iconToDisplay="+"
          textToHide="Hide Promo Code"
          iconToHide="-"
          display={this.state.show}
          >
          <div className="margin-top-10">
            <div className="text-grey-label">Promo Code</div>
            <div className="promo-field">
              <input 
                type="text" 
                onKeyPress={this.updateTextInput }
                value={ this.state.promoValue }
                onChange={ this.updateTextInput }
                disabled={ this.state.disabled }
              />
              <button onClick={this.attemptPromo}>Apply</button>
            </div>
            <div>{ this.state.message }</div>
          </div>
        </Slide>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doPromoAttempt: (code, cartData) => {
      dispatch(discountCodeAttempt(code, cartData))
    }
  }
}

export default connect(checkoutProps, mapDispatchToProps)(Promo);