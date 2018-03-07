import axios from 'axios';

export const LIST = 'pokemon/LIST';
export const DETAIL = 'pokemon/DETAIL';
export const CHANGE_LIST = 'pokemon/CHANGE_LIST';

const initialState = {
  list: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST:
      return {
        ...state,
        list: action.payload
      };
    case CHANGE_LIST:
      if (action.payload.results) {
        return {
          ...state,
          list: action.payload
        };
      }
      return {
        ...state,
        list: {
          ...state.list,
          results: [action.payload]
        }
      };

    default:
      return state;
  }
};

export const list = () => {
  return dispatch =>
    axios.get('https://pokeapi.co/api/v2/pokemon/').then(response =>
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
