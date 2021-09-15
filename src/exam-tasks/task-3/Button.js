import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, whiteBtn, blueBtn }) => {
  let btnStyle;
  if (whiteBtn) btnStyle = styles.whiteBtn;
  if (blueBtn) btnStyle = styles.blueBtn;

  return <button className={btnStyle}>{text}</button>;
};

export default Button;
