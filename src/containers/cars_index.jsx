import React, { Component } from 'react';
import SideBar from '../components/side_bar';
import { connect } from "react-redux";

class CarsIndex extends Component {
  renderCarsList() {
    return this.props.cars.map((car) => {
      return (
        <div className="car-card">
            <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" alt="" />
            <div className="car-card-infos">
              <h1>{car.brand}</h1>
              <h2>Owner: {car.owner}</h2>
            </div>
          </div>
      );
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='side-bar'>
          <SideBar />
        </div>
        <div className='cars-list'>
          {this.renderCarsList()}
        </div>
      </div>
    );
  }
}

function mapReduxstateToProps(reduxState) {
  return {
    cars: reduxState.cars
  }
}

export default connect(mapReduxstateToProps)(CarsIndex);
