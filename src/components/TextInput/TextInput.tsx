import React, { useState } from 'react';
import './TextInput.scss';


type Props = {
  value?: string | number | null;
  onBlur?: (e: any) => void;
  onChange?: (e: any) => void;
  placeholder?: string;
  name?: string;
  id?: string;
  label?: string;
  required?: boolean;
  type?: 'number' | 'text';
  bgColor?: 'grey' | 'white';
  style?: 'rounded' | 'normal';
  disabled?: boolean;
};


const TextInput = (props: Props) => {
  const {
    onBlur = () => {},
    onChange = () => {},
    disabled = false,
    required = false,
    placeholder = '',
    value = '',
    name = '',
    id = '',
    label = '',
    bgColor = 'grey',
    type = 'text',
  } = props;
  const [hasError, setHasError] = useState(false);
  const innerOnChange = (e: any) => {
    if (required) {
      setHasError(e.target.value.length <= 0);
    }
    onChange(e.target.value);
  };
  const innerOnBlur = (e: any) => {
    if (required) {
      setHasError(e.target.value.length <= 0);
    }
    onBlur(e.target.value);
  };
  return (
    <div className="text-input-container">
        {label && <label htmlFor={id} className={`form-label ${hasError && 'error-lbl'}`}>{label}{required && '*'}</label>}
        <input disabled={disabled} type={type} required={required} className={`form-control ${bgColor} ${hasError && 'error'}`} value={value || ''} name={name} id={id}
               onBlur={innerOnBlur}
               onChange={innerOnChange}
               placeholder={placeholder}
        />
    </div>
  );
};

export default TextInput ;
