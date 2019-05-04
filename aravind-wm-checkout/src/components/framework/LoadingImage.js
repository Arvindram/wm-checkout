import React from 'react';
import LoadingGif from '../../assets/images/loading.gif';

export const LoadingImage = (props) => {
  return (
    <div className="loader">
      <div>{ props.title }</div>
      <div><img src={ LoadingGif } alt='Loading...' /></div>
    </div>
  )
}