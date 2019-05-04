import React from 'react';
import PropTypes from 'prop-types';

export const HR = (props) => {
  return (
    <div style={{ 
      borderTop: `1px solid ${props.color }`, 
      minWidth: '100%', 
      marginTop: '10px', 
      marginBottom: '10px'
    }} />
  )
}

HR.propTypes = {
  color: PropTypes.string
}

HR.defaultProps = {
  color: 'grey'
}
