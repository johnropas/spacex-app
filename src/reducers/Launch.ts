import {
  FETCH_LAUNCHES_REQUEST,
  FETCH_LAUNCHES_RESPONSE,
  FETCH_LAUNCHES_FAILURE,
  LaunchState,
  LaunchActionTypes,
} from '../types/Launch';

const initialState: LaunchState = {
  launches: [],
  isFetchingLaunches: false,
  fetchingLaunchesFailed: false,
};

const stockReducer = (
  state = initialState,
  action: LaunchActionTypes,
): LaunchState => {
  switch (action.type) {
    case FETCH_LAUNCHES_REQUEST:
      return {
        ...state,
        launches: [],
        isFetchingLaunches: true,
        fetchingLaunchesFailed: false,
      };
    case FETCH_LAUNCHES_RESPONSE:
      return {
        ...state,
        launches: action.payload || [],
        isFetchingLaunches: false,
        fetchingLaunchesFailed: false,
      };
    case FETCH_LAUNCHES_FAILURE:
      return {
        ...state,
        launches: [],
        isFetchingLaunches: false,
        fetchingLaunchesFailed: true,
      };
    default:
      return state;
  }
};

export default stockReducer;
