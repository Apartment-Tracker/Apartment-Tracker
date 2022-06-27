import React from 'react';
import '../stylesheets/button.scss';

const Button = props => (
  <button onClick={props.onClick} className="btn">{props.btnname}</button>
);

export default Button;