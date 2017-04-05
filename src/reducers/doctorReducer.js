import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function doctorReducer(state = initialState.docs, action) {
  
  switch (action.type) {
    
    case types.LOAD_DOC_SUCCESS:
      return action.docs;

    case types.CREATE_DOC_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.doc)
      ];

    case types.UPDATE_DOC_SUCCESS:
      return [
        ...state.filter(doc => doc.id !== action.doc.id),
        Object.assign({}, action.doc)
      ];

    default:
      return state;
  }
}
