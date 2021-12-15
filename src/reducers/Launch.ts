import {
  FETCH_STOCK_REQUEST,
  FETCH_STOCK_RESPONSE,
  FETCH_STOCK_FAILURE,
  StockState,
  StockActionTypes,
} from '../types/Launch';

const initialState: StockState = {
  stock: null,
  isFetchingStock: false,
  fetchingStockFailed: false,
};

const stockReducer = (
  state = initialState,
  action: StockActionTypes,
): StockState => {
  switch (action.type) {
    case FETCH_STOCK_REQUEST:
      return {
        ...state,
        stock: null,
        isFetchingStock: true,
        fetchingStockFailed: false,
      };
    case FETCH_STOCK_RESPONSE:
      return {
        ...state,
        stock: action.payload || null,
        isFetchingStock: false,
        fetchingStockFailed: false,
      };
    case FETCH_STOCK_FAILURE:
      return {
        ...state,
        stock: null,
        isFetchingStock: false,
        fetchingStockFailed: true,
      };
    default:
      return state;
  }
};

export default stockReducer;
