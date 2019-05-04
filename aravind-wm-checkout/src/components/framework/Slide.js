import React from 'react';
import PropTypes from 'prop-types';

export class Slide extends React.Component {

  state = {
    display: false,
    text: (this.props.display) ? this.props.textToHide: this.props.textToDisplay,
    icon: (this.props.display) ? this.props.iconToHide : this.props.iconToDisplay,
    className: (this.props.display) ? 'slide-content-visible' : 'slide-content-hidden',
  }

  componentDidUpdate(prevProps, prevState) {

  }

  showHide = () => {
    const {textToHide}=this.props;
    console.log(textToHide.trim(), 'textToHide')
    const slideDown = 'slide-down';
    const slideUp = 'slide-up';
    if( this.state.display ) {
      this.setState({
        className: textToHide==="Hide Promo Code" ? `promo-slide ${slideUp}` :`${slideUp}`,
        text: this.props.textToDisplay,
        icon: this.props.iconToDisplay,
        display: false,
      })
    } else {
      this.setState({
        className: textToHide==="Hide Promo Code" ? `promo-slide ${slideDown}` :`${slideDown}`,
        text: this.props.textToHide,
        icon: this.props.iconToHide,
        display: true,
      })
    }
  }

  render() {
    return (
      <div>
        <div>
          <span className='slider-label' onClick={ this.showHide }>
            { this.state.text }
          </span>
          <span onClick={ this.showHide } className='pointer'>{ this.state.icon }</span>
        </div>
        <div className={ this.state.className }>
          { this.props.children }
        </div>
      </div>
    )
  }

}

Slide.propTypes = {
  textToDisplay: PropTypes.string,
  iconToDisplay: PropTypes.string,
  textToHide: PropTypes.string,
  iconToHide: PropTypes.string,
  display: PropTypes.bool
}

Slide.defaultProps = {
  textToDisplay: "Show",
  textToHide: "Hide",
  iconToDisplay: "+",
  iconToHide: "-",
  display: false
}

