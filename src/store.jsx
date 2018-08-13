import { createStore } from 'redux';

const reducer = (state, action) => {
  /*if(action.type === 'ADD_DATA'){
    return {
      ...state,
      data: state.data.concat(action.data)
    }
  }*/
  return state;
}

export default createStore(reducer, { data: [] });
