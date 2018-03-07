import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import pokemon from './pokemon';
import pokedex from './pokedex';

export default combineReducers({
  router: routerReducer,
  pokemon,
  pokedex
});
