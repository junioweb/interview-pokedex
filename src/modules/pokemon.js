import axios from 'axios';

export const LIST = 'pokemon/LIST';

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
