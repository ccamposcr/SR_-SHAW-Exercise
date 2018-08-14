import { createStore } from 'redux';

const reducer = (state, action) => {
  if(action.type === 'ADD_ROWS'){
    return {
      ...state,
      data: state.data.concat(action.rows)
    };
  }

  return state;
}

export default createStore(reducer, { data: [] });
