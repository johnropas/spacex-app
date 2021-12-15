import { RootState } from '../store/configureStore';

export const getStock = (state: RootState) => state?.stock?.stock;

export const isFetchingStock = (state: RootState) =>
  state?.stock?.isFetchingStock;

export const didFetchingStockFailed = (state: RootState) =>
  state?.stock?.fetchingStockFailed;
