import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SideBar extends Component {

  render() {
    return(
			<div>
        <h1>side bar</h1>
        <Link to={`/cars/new`}>
          <p>
            Add a new car
          </p>
        </Link>
      </div>
    );
  }

}

export default SideBar;
