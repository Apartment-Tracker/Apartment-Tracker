import React from 'react';
import '../stylesheets/navigation.scss';
import { BrowserRouter } from 'react-router-dom';


const Navigation = props => {
  return(
      <nav>
        <div className="category">
          <div id="logo"></div>
          <div>
            <h2>Category Name</h2>
            <p className="back">Back to Category</p>
          </div>
          <div>
            <input type="search" id="search" name="search"/>
          </div>
          <div id="profile"></div>
        </div>
      </nav>
    
  );
};

export default Navigation;
