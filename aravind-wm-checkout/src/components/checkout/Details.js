import React from 'react';
import checkoutProps from './checkout-props';
import { connect } from 'react-redux';
import { Slide } from '../framework';

class Details extends React.Component {

  state = {
    cartData: {
      cartItem: {},
      itemDetails: {
        image: '',
      },
    },
    priceClass: '',
  }

  componentDidUpdate(prevProps, prevState) {
    if( this.state.cartData !== this.props.cartData ) {
      this.setState({
        cartData: this.props.cartData,
        priceClass: this.getPriceClass(),
        costAfterDiscounts: this.costAfterDiscounts()
      });
    }
  }

  getPriceClass() {
    if(this.props.cartData.cartItem.pickupInStore || this.props.cartData.cartItem.savings) {
      return 'text-strikethrough';
    }
  }

  costAfterDiscounts() {
    let total = this.props.cartData.cartItem.subtotal;
    if(this.props.cartData.cartItem.pickupInStore){
      total = total - this.props.cartData.cartItem.shipping;
    }
    if(this.props.cartData.cartItem.savings) {
      total = total - this.props.cartData.cartItem.savings;
    }
    return total;
  }

  render() {
    const {
      image,
      name,
      options,
      price
    } = this.state.cartData.itemDetails;
    const {
      qty,
    } = this.state.cartData.cartItem;
    return (
      <Slide 
        textToDisplay="Show item details"
        iconToDisplay="+"
        textToHide="Hide item details"
        iconToHide="-"
        show={ false }
        >
        <div className = "row-details margin-top-10">
          <div>
            { image && <img src={`/api/images/${image}`} alt='Red chair' /> }
          </div>
          <div>
            { name && <span>{ name }, { options.color }</span> }
            <div className="row-2-col-data-right margin-top-10">
              <div>
                { this.state.costAfterDiscounts && (
                  <span className="price-value">${ this.state.costAfterDiscounts }</span>
                )}
                <span className={ this.state.priceClass}><br />${ price }</span>
              </div>
              <div>{ qty }</div>
            </div>
          </div>
        </div>
      </Slide>
    )
  }

}

export default connect(checkoutProps)(Details);