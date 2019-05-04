import React from 'react';
import PropTypes from 'prop-types';

export const Tooltip = (props) => {
  return (
    <React.Fragment>
      { props.display && (
        <div className='tooltip'>
          { props.children }
        </div>
      )}
    </React.Fragment>
  )
}

Tooltip.propTypes = {
  display: PropTypes.bool
}

Tooltip.defaultProps = {
  display: false
}
