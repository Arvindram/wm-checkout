import * as actions from './action-types';

export const apiServiceCall = () => {
  return (dispatch) => {
    dispatch(apiIsLoading(true));
    /* fake a call to an api service */
    setTimeout( () => {
      fetch('/api/cart.json')
      .then( response => {
        if(!response.ok){
          throw Error(response.statusText);
        }
        dispatch(apiIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then( cart => dispatch(apiFetchSuccess(cart)))
      .catch( () => {
        dispatch(apiLoadError(true)); 
      })
    }, 1000);
  }
}

export const apiLoadError = (bool) => {
  return {
    type: actions.API_LOADING_ERROR,
    hasErrored: bool
  }
}

export const apiIsLoading = (bool) => {
  return {
    type: actions.API_IS_LOADING,
    payload: bool
  }
}

export const apiFetchSuccess = (cart) => {
  return {
    type: actions.API_LOADING_SUCCESS,
    payload: cart
  }
}

export const discountCodeAttempt = (code, cartData) => {
  /* simulate a trip to server */
  return (dispatch) => {
    dispatch(discountAttempt(true));
    setTimeout( () => {
      if(code.toLowerCase() === cartData.itemDetails.discountCode.toLowerCase()){
        const details = cartData.itemDetails;
        const discountAmount = parseFloat( details.discountAmount.replace('%', ''));
        const savings = (details.price * (discountAmount * .01)).toFixed(2);
        const total = parseFloat(cartData.cartItem.total) - savings;
        console.log(total);
        dispatch(discountSuccess(savings, total));
      } else {
        dispatch(discountFailure());
      }
    }, 750);
  }
}

export const discountAttempt = (bool) => {
  return {
    type: 'DISCOUNT_ATTEMPT',
    payload: bool,
  };
}

export const discountSuccess = (savings, total) => {
  return {
    type: 'DISCOUNT_CODE_SUCCESS',
    payload: {
      savings,
      total,
      discountApplied: true
    }
  }
}

export const discountFailure = () => {
  return {
    type: 'DISCOUNT_CODE_FAILURE'
  }
}
