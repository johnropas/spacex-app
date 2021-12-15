import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import {
  FETCH_LAUNCHES_REQUEST,
  FETCH_LAUNCHES_RESPONSE,
  FETCH_LAUNCHES_FAILURE,
  Launch,
  LaunchActionTypes,
} from '../types/Launch';

import { RootState } from '../store/configureStore';
import { getCustomerID, isAuthCookieValid } from '../helpers/functions';
import { authLogin } from './Auth';
import { getStock } from '../api/LaunchApi';

export function fetchLaunchesRequest(): LaunchActionTypes {
  return {
    type: FETCH_LAUNCHES_REQUEST,
    payload: null,
  };
}

export function fetchLaunchesResponse(
  stock: Launch,
): LaunchActionTypes {
  return {
    type: FETCH_LAUNCHES_RESPONSE,
    payload: stock,
  };
}

export function fetchLaunchesFailure(): LaunchActionTypes {
  return {
    type: FETCH_LAUNCHES_FAILURE,
    payload: null,
  };
}

export const fetchLaunches = ():
ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    dispatch(fetchStockRequest());
    if (!isAuthCookieValid()) {
      await dispatch(authLogin());
    }
    const finalCustomerId = getCustomerID() || '';
    const asyncResp: any = await getStock(finalCustomerId, sku, 30, width1, '1');
    if (asyncResp.status === 200) {
      await dispatch(fetchStockResponse(asyncResp.data));
    } else {
      await dispatch(fetchStockFailure());
    }
  };
