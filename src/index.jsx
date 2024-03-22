import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { reducer as formReducer } from 'redux-form';


//Components
import CarsIndex from "./containers/cars_index";
import CarsNew from "./containers/cars_new";
import CarsShow from "./containers/cars_show";

//Reducers
import carsReducer from "./reducers/cars_reducer";

import '../assets/stylesheets/application.scss';


const reducers = combineReducers({
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router >
      <Switch>
        <Route path="/" exact component={CarsIndex} />
        <Route path="/cars/new" exact component={CarsNew} />
        <Route path="/cars/:id" exact component={CarsShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
