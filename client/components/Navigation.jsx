import React from 'react';
import '../stylesheets/navigation.scss';
import '@fortawesome/fontawesome-free/js/all';

const Navigation = props => {
  return(
    <div id="nav">
      <div id="logo"></div>
      <div className="rightnav">
        <div>
          <h2>Category Name</h2>
          <div id="back">
            <i className="fa-solid fa-caret-left"></i>
            <p className="back"> Back to Category</p>
          </div>
        </div>
      </div>
      <div className="leftnav">
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        <input type="search" id="search" name="search"></input>
        <div id="profile"></div>
      </div>
    </div>
    
  );
};

export default Navigation;
