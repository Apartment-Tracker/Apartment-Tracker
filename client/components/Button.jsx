import React from 'react';
import '../stylesheets/button.scss';

const Button = props => (
  <div>
    <button className="btn">{props.btnname}</button>
  </div>
);

export default Button;