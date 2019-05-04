const checkoutProps = ({ rootReducer }) => {
  const {
    isLoading,
    cartData,
    discountAttempt,
    discountAttemptResult,
    codeLookupComplete,
  } = rootReducer;
  return {
    isLoading,
    cartData,
    discountAttempt,
    discountAttemptResult,
    codeLookupComplete
  }
}

export default checkoutProps;