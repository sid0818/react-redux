import expect from 'expect';
import * as doctorAction from './doctorAction';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Doc Actions', () => {
  describe('createDocSuccess', () => {
    it('should create a CREATE_DOC_SUCCESS action', () => {
      //arrange
      const doc = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_DOC_SUCCESS,
        doc: doc
      };

      //act
      const action = doctorAction.createDocSuccess(doc);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_DOC_SUCCESS when loading docs', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, { body: { course: [{ id: 1, firstName: 'Cory', lastName: 'House'}] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_DOC_SUCCESS, body: {docs: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({docs: []}, expectedActions, done);
    store.dispatch(doctorAction.loadDocList()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_DOC_SUCCESS);
      done();
    });
  });
});
