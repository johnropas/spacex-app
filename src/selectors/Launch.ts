import { RootState } from '../store/configureStore';

export const getLaunches = (state: RootState) => state?.launch?.launches;

export const isFetchingLaunches = (state: RootState) =>
  state?.launch?.isFetchingLaunches;

export const didFetchingLaunchesFailed = (state: RootState) =>
  state?.launch?.fetchingLaunchesFailed;
