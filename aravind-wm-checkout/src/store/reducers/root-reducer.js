import {
  API_IS_LOADING,
  API_LOADING_SUCCESS,
  DISCOUNT_CODE_SUCCESS,
  DISCOUNT_CODE_FAILURE,
  DISCOUNT_ATTEMPT
  } from '../actions/action-types';

  const defaultState = {
    isLoading: true,
    receivedCart: false,
    cartData: {},
    discountAttempt: false,
    discountAttemptResult: '',
    codeLookupComplete: true,
  }

  const rootReducer = ( state = defaultState, action) => {

  switch(action.type) {
    case API_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }  

    case API_LOADING_SUCCESS:
      return {
        ...state,
        cartData: action.payload
      }

    case DISCOUNT_ATTEMPT:
      return {
        ...state,
        discountAttempt: action.payload,
        codeLookupComplete: false,
      }

    case DISCOUNT_CODE_SUCCESS:
      return {
        ...state,
        cartData: {
          ...state.cartData,
          cartItem: {
            ...state.cartData.cartItem,
            savings: action.payload.savings,
            total: action.payload.total,
            discountApplied: true
          }
        },
        discountAttempt: false,
        discountAttemptResult: 'success',
        codeLookupComplete: true
      }

    case DISCOUNT_CODE_FAILURE:
      return {
        ...state,
        discountAttempt: false,   
        discountAttemptResult: 'failure',  
        codeLookupComplete: true   
      }
      
    default:
      return state;
  }
}

export default rootReducer;