import React from 'react';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from '../../helpers/history';
import App from './App';

const ensureGridApiHasBeenSet = (wrapper: any) => {
  return new Promise(function (resolve) {
    (function waitForGridReady() {
      if (wrapper.instance() && wrapper.instance().gridApi) {
        resolve(wrapper);
        return;
      }
      resolve(wrapper);
      setTimeout(waitForGridReady, 100);
    })();
  });
};

const middlewares: any[] = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({
  launch: {
    launches: [
      {
        details: 'blah',
        mission_name: 'blah blah',
        launch_date_utc: '2021-12-16T17:00:26Z',
      },
    ],
    isFetchingLaunches: false,
    fetchingLaunchesFailed: false,
  },
});

describe('App', () => {
  let wrapper: any = null;
  // let agGridReact = null;
  beforeEach((done) => {
    wrapper = mount(<Provider store={store}><Router history={history}><App /></Router></Provider>);
    // agGridReact = wrapper.find(AgGridReact).instance();

    ensureGridApiHasBeenSet(wrapper)
      .then(() => done());
  });
  it('renders App Framework', () => {
    expect(wrapper).toMatchSnapshot();
  });

});

