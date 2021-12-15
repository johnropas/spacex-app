import { createStore, applyMiddleware, combineReducers, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import authReducer from '../reducers/Auth';
import productTypeReducer from '../reducers/ProductType';
import productReducer from '../reducers/Product';
import orderReducer from '../reducers/Order';
import statementReducer from '../reducers/Statement';
import customerReducer from '../reducers/Customer';
import stockReducer from '../reducers/Launch';
import priceReducer from '../reducers/Price';

const rootReducer = combineReducers({
  auth: authReducer,
  productType: productTypeReducer,
  product: productReducer,
  order: orderReducer,
  statement: statementReducer,
  customer: customerReducer,
  stock: stockReducer,
  price: priceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;

export default store;
