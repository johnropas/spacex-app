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
import { getLaunches } from '../api/LaunchApi';

export function fetchLaunchesRequest(): LaunchActionTypes {
  return {
    type: FETCH_LAUNCHES_REQUEST,
    payload: null,
  };
}

export function fetchLaunchesResponse(
  launches: Launch[],
): LaunchActionTypes {
  return {
    type: FETCH_LAUNCHES_RESPONSE,
    payload: launches,
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
    dispatch(fetchLaunchesRequest());
    const asyncResp: any = await getLaunches();
    if (asyncResp.status === 200) {
      await dispatch(fetchLaunchesResponse(asyncResp.data));
    } else {
      await dispatch(fetchLaunchesFailure());
    }
  };
