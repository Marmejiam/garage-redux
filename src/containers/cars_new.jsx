import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { createCar } from "../actions";
import SideBar from '../components/side_bar';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, (car) => {
      this.props.history.push('/'); // Navigate after submit
        return car;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return(
			<div className='container-new'>
        <div className='side-bar'>
          <SideBar />
        </div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Model"
            name="model"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Plate"
            name="plate"
            type="text"
            component={this.renderField}
          />
          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Create Car
          </button>
        </form>
      </div>
    );
  }

}


export default reduxForm({ form: 'newPostForm' })(
  connect(null, { createCar })(CarsNew)
);
