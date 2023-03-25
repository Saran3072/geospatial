import React from 'react';
import './ButtonModel.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn1--primary', 'btn1--outline'];

const SIZES = ['btn1--medium', 'btn1--large'];

export const ButtonPAnnounce = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  path,
  dist 
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

  return (
    <Link to={'/pannounce/'+ window.location.href.split('/').pop() +'/' + path} className='btn-mobile'>
      <button
        className={`btnn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
