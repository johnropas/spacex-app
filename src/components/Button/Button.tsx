import React from 'react';
import './Button.scss';

type Props = {
  text:string;
  type?: 'orange' | 'grey' | 'light-grey' | 'link';
  size?: 'sm' | 'lg' | 'stretch';
  disabled?: boolean;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const {
    text = '',
    disabled = false,
    size = 'lg',
    type = 'orange',
    onClick = () => {},
  } = props;
  let finalCssClass = '';
  switch (type) {
    case 'grey':
      finalCssClass = 'lw-button-grey';
      break;
    case 'light-grey':
      finalCssClass = 'lw-button-light-grey';
      break;
    case 'link':
      finalCssClass = 'lw-button-link';
      break;
    default:
      finalCssClass = 'lw-button-orange';
      break;
  }

  switch (size) {
    case 'sm':
      finalCssClass += ' lw-button-sm';
      break;
    case 'stretch':
      finalCssClass += ' lw-button-stretch';
      break;
    default:
      finalCssClass += ' lw-button-lg';
      break;
  }

  if (disabled) {
    finalCssClass += ' lw-button-disabled';
  }

  const innerOnClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
      <button className={`lw-button ${finalCssClass}`} onClick={innerOnClick}>
        {text}
      </button>
  );
};

export default Button;
