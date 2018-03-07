import axios from 'axios';

export const ADD = 'pokedex/ADD';
export const REMOVE = 'pokedex/REMOVE';
export const LIST = 'pokedex/LIST';
export const DETAIL = 'pokedex/DETAIL';
export const CHANGE_LIST = 'pokedex/CHANGE_LIST';

const initialState = {
  list: {
    results: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: {
          ...state.list,
          results: [...state.list.results, action.payload]
        }
      };
    case REMOVE:
      return {
        ...state,
        list: {
          ...state.list,
          results: state.list.results.filter(
            result => result.name !== action.payload.name
          )
        }
      };
    case LIST:
      return {
        ...state,
        list: action.payload
      };
    case CHANGE_LIST:
      return {
        ...state,
        list: action.payload
      };

    default:
      return state;
  }
};

export const add = pokemon => {
  return dispatch =>
    dispatch({
      type: ADD,
      payload: pokemon
    });
};

export const remove = pokemon => {
  return dispatch =>
    dispatch({
      type: REMOVE,
      payload: pokemon
    });
};

export const list = () => {
  return dispatch =>
    axios
      .get('http://www.mocky.io/v2/5a9df3603000004d002349b1')
      .then(response =>
        dispatch({
          type: LIST,
          payload: response.data
        })
      );
};

// http://www.mocky.io/v2/5a9df3603000004d002349b1
// https://pokeapi.co/api/v2/pokemon

export const detail = pokemon => {
  return dispatch =>
    axios.get(pokemon.url).then(response =>
      dispatch({
        type: DETAIL,
        payload: response.data
      })
    );
};

export const changeList = url => {
  return dispatch =>
    axios.get(url).then(response =>
      dispatch({
        type: CHANGE_LIST,
        payload: response.data
      })
    );
};
