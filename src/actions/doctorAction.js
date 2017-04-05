import * as types from './actionTypes';
import docApi from '../api/mockDocListApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadDocSuccess(docs) {
  return { type: types.LOAD_DOC_SUCCESS, docs};
}

export function createDocSuccess(docs) {
  return {type: types.CREATE_DOC_SUCCESS, docs};
}

export function updateDocSuccess(docs) {
  return {type: types.UPDATE_DOC_SUCCESS, docs};
}

export function loadDocList() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return docApi.getAllDocList().then(docs => {
      dispatch(loadDocSuccess(docs));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveDocList(doc) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return docApi.saveDoc(doc).then(doc => {
      doc.id ? dispatch(updateDocSuccess(doc)) :
        dispatch(createDocSuccess(doc));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
