import { createStore } from 'redux';

const reducer = (state, action) => {
  if(action.type === 'ADD_ROWS'){
    return {
      ...state,
      data: state.data.concat(action.rows)
    };
  }/*else if(action.type === 'ADD_ROW_TITLE'){
    return {
      ...state,
      data: state.data.concat(action.rowTitle)
    }
  }*/

  return state;
}

export default createStore(reducer, { data: [] });
