import axios from 'axios';

export const LIST = 'pokemon/LIST';
export const DETAIL = 'pokemon/DETAIL';

const initialState = {
  list: {},
  detail: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LIST:
      return {
        ...state,
        list: action.payload
      };

    default:
      return state;
  }
};

export const list = () => {
  return dispatch =>
    axios.get('https://pokeapi.co/api/v2/pokemon').then(response =>
      dispatch({
        type: LIST,
        payload: response.data
      })
    );
};

// http://www.mocky.io/v2/5a9df3603000004d002349b1
// https://pokeapi.co/api/v2/pokemon

export const detail = param => {
  return dispatch =>
    axios.get(param.url).then(response =>
      dispatch({
        type: DETAIL,
        payload: response.data
      })
    );
};
